import Link from "next/link";
import HeroSection from "./components/heroSection";

export default function Reservations() {
  return (
    <>
      <HeroSection />
      <section className="desktop-container p-16">
        <h1 className="text-3xl font-bold mb-4">
          Reservations Are Open for Any Party Size!
        </h1>
        <p className="mb-8">
          For large parties (9+ or more people), please email us at{" "}
          <a
            href="mailto:sipnplaynyc@gmail.com"
            className="email-link font-semibold text-light-brown transition transform"
          >
            sipnplaynyc@gmail.com
          </a>{" "}
          to inquire about a reservation.
        </p>

        <h2 className="text-2xl font-bold mb-4">Reservation Details</h2>
        <p className="mb-4">
          We have just started using a new reservation software, Tock!
          Reservations are $15 a person for 3 hours of game time.
        </p>
        <p className="mb-8">All reservations can be made on our new site.</p>

        <Link
          href="https://www.exploretock.com/sipnplay/"
          className="block text-center w-1/5 bg-black text-green p-2 rounded-xl font-semibold shadow-md cursor-pointer transition transform hover:scale-105 hover:bg-gray-800 hover:text-pink mb-16"
        >
          Visit Tock
        </Link>

        <h1 className="title mb-4 font-bold text-2xl">Birthday Packages</h1>
        <h2 className="subtitle mb-2 text-light-brown text-[1.25rem]  font-semibold">
          Renting Entire Backroom
        </h2>
        <p className="package-description mb-8">
          $350 for 3 hours of game time all to your party!
        </p>

        <h1 className="title mb-4 font-bold text-2xl">
          Birthday Backroom Packages
        </h1>

        <h2 className="package-price mb-2 text-light-brown text-[1.25rem] font-semibold">
          $550 Birthday Basic Package
        </h2>
        <p className="package-description mb-8">
          Have the entire backroom to yourselves and get pizza and soda for the
          whole party! For ten people, each additional person is +$30.
        </p>

        <h2 className="package-price mb-2 text-light-brown text-[1.25rem] font-semibold">
          $700 Birthday Premium Package
        </h2>
        <p className="package-description mb-8">
          Have the entire backroom to yourselves with pizza, soda, unlimited
          bubble tea, unlimited appetizers and each participant gets a Sip &
          Play goodie bag! For ten people, each additional person is +$45.
        </p>

        <p className="footer">
          For any other large party inquiries, request for a reservation through
          Tock!
        </p>
      </section>
    </>
  );
}
