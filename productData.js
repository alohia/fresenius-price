const TAX_RATE = 0.05;

const PRODUCT_DATA = [
  {
    name: 'VOLUVEN 6% 250 ML',
    packSize: 30,
    baseUnitPrice: 324.73,
  },
  {
    name: 'KABILYTE 500 ML',
    packSize: 20,
    baseUnitPrice: 145.18,
  },
  {
    name: 'KABIPARA 100 ML BOTT',
    packSize: 100,
    baseUnitPrice: 32.26,
  },
  {
    name: 'INTRALIPID 20% 250 ML',
    packSize: 12,
    baseUnitPrice: 469.8,
  },
  {
    name: 'AMINOWEL 5% 250 ML',
    packSize: 12,
    baseUnitPrice: 344.35,
  },
];

function getTaxMultiplier() {
  return 1 + TAX_RATE;
}

function getTaxedUnitPrice(baseUnitPrice) {
  return baseUnitPrice * getTaxMultiplier();
}
