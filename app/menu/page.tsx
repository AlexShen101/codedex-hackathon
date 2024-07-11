export default async function Menu() {
  const res = await fetch("http://127.0.0.1:3000/api/menu-items");
  const data = await res.json();

  return <h1>Menu page</h1>;
}
