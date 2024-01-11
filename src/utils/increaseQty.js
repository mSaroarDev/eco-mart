export async function increaseQty({ values }) {
  const res = await fetch("/api/cart/increaseQty", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(values),
  });

  const data = await res.json();
  return data.data;
}
