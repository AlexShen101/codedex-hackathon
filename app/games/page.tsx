export default async function Games() {
  const res = await fetch("http://127.0.0.1:3000/api/menu-items");
  const data = await res.json();

  return <h1>Game page</h1>;
}
