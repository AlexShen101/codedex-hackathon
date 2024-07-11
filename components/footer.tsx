export default function Footer() {
  return (
    <footer>
      <p>Footer</p>
      <a href="/" className="hover:underline">Home</a>
      <a href="/about" className="hover:underline">About</a>
      <a href="/games" className="hover:underline">Game Collection</a>
      <a href="/menu" className="hover:underline">Menu</a>
      <a href="/events" className="hover:underline">Events</a>
      <a href="/reservations" className="hover:underline">Reservations</a>

      <h3>Contact Us</h3>
      <div className="contact-info">
        <a href="tel:718-971-1684">(718) 971-1684</a>
        <a href="mailto:sipnplaynyc@gmail.com">sipnplaynyc@gmail.com</a>
      </div>
    </footer>
  );
}