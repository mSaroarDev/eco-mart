export async function getProductDetails(productId) {
  const res = await fetch(`/api/product/single?id=${productId}`);
  const data = await res.json();
  return data.data;
}
