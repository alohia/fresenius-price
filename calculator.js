document.addEventListener('DOMContentLoaded', () => {
  const tableBody = document.getElementById('product-table-body');

  PRODUCT_DATA.forEach((product, index) => {
    const row = document.createElement('tr');

    const nameCell = document.createElement('td');
    nameCell.textContent = product.name;
    row.appendChild(nameCell);

    const packSizeCell = document.createElement('td');
    packSizeCell.textContent = product.packSize;
    row.appendChild(packSizeCell);

    const priceCell = document.createElement('td');
    priceCell.textContent = `₹${formatCurrency(getTaxedUnitPrice(product.baseUnitPrice))}`;
    row.appendChild(priceCell);

    const quantityCell = document.createElement('td');
    const quantityInput = document.createElement('input');
    quantityInput.type = 'number';
    quantityInput.id = getQuantityInputId(index);
    quantityInput.name = getQuantityInputId(index);
    quantityInput.min = '0';
    quantityCell.appendChild(quantityInput);
    row.appendChild(quantityCell);

    tableBody.appendChild(row);
  });
});

function calculateTotal() {
  const resultsDiv = document.getElementById('results');
  resultsDiv.innerHTML = '';

  let overallTotal = 0;

  PRODUCT_DATA.forEach((product, index) => {
    const quantity = parseInt(document.getElementById(getQuantityInputId(index)).value, 10) || 0;
    const lineTotal =
      product.packSize * product.baseUnitPrice * quantity * getTaxMultiplier();

    overallTotal += lineTotal;

    resultsDiv.innerHTML += `${product.name} Total: ₹ ${formatCurrency(lineTotal)}<br>`;
  });

  resultsDiv.innerHTML += `Overall Total: ₹ ${formatCurrency(overallTotal)}`;
}

function getQuantityInputId(index) {
  return `quantity-${index}`;
}

function formatCurrency(value) {
  return (Math.round(value * 100) / 100).toFixed(2);
}
