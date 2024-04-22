function calculateTotal() {
  // Get input values
  const product1Qty = parseInt(document.getElementById('product1').value) || 0;
  const product2Qty = parseInt(document.getElementById('product2').value) || 0;
  const product3Qty = parseInt(document.getElementById('product3').value) || 0;
  const product4Qty = parseInt(document.getElementById('product4').value) || 0;
  const product5Qty = parseInt(document.getElementById('product5').value) || 0;
  
  // Prices of each product
  const productPrices = [327.04, 151.20, 35.84, 437.85, 330.75];
  const productNames = ['VOLUVEN 6% 250 ML', 'KABILYTE 500 ML', 'KABIPARA 100 ML BOTT', 'INTRALIPID 20% 250 ML', 'AMINOWEL 5% 250 ML'];
  
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
    resultsDiv.innerHTML += `${productNames[i]} Total: ₹ ${productTotalPrices[i]}<br>`;
  }
  resultsDiv.innerHTML += `Overall Total: ₹ ${overallTotal}`;
}
