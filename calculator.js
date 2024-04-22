function calculateTotal() {
  // Get input values
  const product1Qty = parseInt(document.getElementById('product1').value) || 0;
  const product2Qty = parseInt(document.getElementById('product2').value) || 0;
  const product3Qty = parseInt(document.getElementById('product3').value) || 0;
  const product4Qty = parseInt(document.getElementById('product4').value) || 0;
  const product5Qty = parseInt(document.getElementById('product5').value) || 0;
  
  // Prices of each product
  const productPrices = [327.04, 151.20, 35.84, 437.85, 330.75];
  const packSizes = [30, 20, 100, 12, 12];
  const productNames = ['VOLUVEN 6% 250 ML', 'KABILYTE 500 ML', 'KABIPARA 100 ML BOTT', 'INTRALIPID 20% 250 ML', 'AMINOWEL 5% 250 ML'];
  
  // Calculate total price for each product
  const productTotalPrices = [
    product1Qty * packSizes[0] * productPrices[0],
    product2Qty * packSizes[1] * productPrices[1],
    product3Qty * packSizes[2] * productPrices[2],
    product4Qty * packSizes[3] * productPrices[3],
    product5Qty * packSizes[4] * productPrices[4]
  ];
  
  // Calculate overall total
  const overallTotal = productTotalPrices.reduce((total, price) => total + price, 0);
  
  // Display results
  const resultsDiv = document.getElementById('results');
  resultsDiv.innerHTML = '';
  for (let i = 0; i < productTotalPrices.length; i++) {
    resultsDiv.innerHTML += `${productNames[i]} Total: ₹ ${productTotalPrices[i]}<br>`;
  }
  resultsDiv.innerHTML += `Overall Total: ₹ ${overallTotal}`;
}
