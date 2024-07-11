export default async function Events() {
  const res = await fetch("http://127.0.0.1:3000/api/events");
  const data = await res.json();

  return <h1>Events page</h1>;
}
