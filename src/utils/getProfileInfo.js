export async function profileData() {
  const res = await fetch(`/api/user/myprofile`);
  const data = await res.json();
  return data?.data;
}
