export async function removeCart(cartId) {
  const res = await fetch(`/api/cart/remove?cart_id=${cartId}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await res.json();

  return data.data;
}
