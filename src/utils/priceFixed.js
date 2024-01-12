export default function priceFixed(price) {
  const priceInt = parseInt(price);
  return `$${priceInt.toFixed(2)}`;
}
