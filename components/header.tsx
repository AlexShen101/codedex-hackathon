export default function Header() {
  return (
    <header>
      <p>Header</p>
      <nav className="space-x-4">
        <a href="/" className="hover:underline">Home</a>
        <a href="/about" className="hover:underline">About</a>
        <a href="/games" className="hover:underline">Game Collection</a>
        <a href="/menu" className="hover:underline">Menu</a>
        <a href="/events" className="hover:underline">Events</a>
        <a href="/reservations" className="hover:underline">Reservations</a>
      </nav>
    </header>
  );
}