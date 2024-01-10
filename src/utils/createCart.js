export async function createCart(productId, qty) {
  const res = await fetch(`/api/cart/add?p_id=${productId}&p_qty=${qty}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await res.json();

  return data.data;
}
