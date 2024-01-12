export async function getCartItems() {
  const res = await fetch("/api/cart/all");

  const data = await res.json();
  return data.data;
}
