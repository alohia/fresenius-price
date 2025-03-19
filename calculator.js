function calculateTotal() {
  // Get input values
  const product1Qty = parseInt(document.getElementById('product1').value) || 0;
  const product2Qty = parseInt(document.getElementById('product2').value) || 0;
  const product3Qty = parseInt(document.getElementById('product3').value) || 0;
  const product4Qty = parseInt(document.getElementById('product4').value) || 0;
  const product5Qty = parseInt(document.getElementById('product5').value) || 0;
  
  // Prices of each product
  const productPrices = [363.70, 162.60, 35.84, 493.29, 361.57];
  const packSizes = [30, 20, 100, 12, 12];
  const productNames = ['VOLUVEN 6% 250 ML', 'KABILYTE 500 ML', 'KABIPARA 100 ML BOTT', 'INTRALIPID 20% 250 ML', 'AMINOWEL 5% 250 ML'];
  
  // Calculate total price for each product
  const productTotalPrices = [
    Math.round(product1Qty * packSizes[0] * productPrices[0] * 100) / 100,
    Math.round(product2Qty * packSizes[1] * productPrices[1] * 100) / 100,
    Math.round(product3Qty * packSizes[2] * productPrices[2] * 100) / 100,
    Math.round(product4Qty * packSizes[3] * productPrices[3] * 100) / 100,
    Math.round(product5Qty * packSizes[4] * productPrices[4] * 100) / 100
  ];
  
  // Calculate overall total
  const overallTotal = productTotalPrices.reduce((total, price) => total + price, 0);
  
  // Display results
  const resultsDiv = document.getElementById('results');
  resultsDiv.innerHTML = '';
  for (let i = 0; i < productTotalPrices.length; i++) {
    resultsDiv.innerHTML += `${productNames[i]} Total: ₹ ${Math.round(productTotalPrices[i] * 100) / 100}<br>`;
  }
  resultsDiv.innerHTML += `Overall Total: ₹ ${Math.round(overallTotal * 100) / 100}`;
}
