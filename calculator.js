function calculateTotal() {
  // Get input values
  const product1Qty = parseInt(document.getElementById('product1').value);
  const product2Qty = parseInt(document.getElementById('product2').value);
  const product3Qty = parseInt(document.getElementById('product3').value);
  const product4Qty = parseInt(document.getElementById('product4').value);
  const product5Qty = parseInt(document.getElementById('product5').value);
  
  // Prices of each product
  const productPrices = [10, 20, 30, 40, 50];
  
  // Calculate total price for each product
  const productTotalPrices = [
    product1Qty * productPrices[0],
    product2Qty * productPrices[1],
    product3Qty * productPrices[2],
    product4Qty * productPrices[3],
    product5Qty * productPrices[4]
  ];
  
  // Calculate overall total
  const overallTotal = productTotalPrices.reduce((total, price) => total + price, 0);
  
  // Display results
  const resultsDiv = document.getElementById('results');
  resultsDiv.innerHTML = '';
  for (let i = 0; i < productTotalPrices.length; i++) {
    resultsDiv.innerHTML += `Product ${i + 1} Total: $${productTotalPrices[i]}<br>`;
  }
  resultsDiv.innerHTML += `Overall Total: $${overallTotal}`;
}
