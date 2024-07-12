import Link from "next/link";
import EventDisplay from "./eventDisplay";

export default function HomeEventsSection() {
  return (
    <>
      <section className="desktop-container p-12">
        <div className="flex justify-between items-baseline mb-4">
          <h1 className="font-semibold text-3xl">Exciting Events</h1>
          <Link
            className="text-light-brown font-semibol transition hover:underline"
            href="/events"
          >
            See All
          </Link>
        </div>
        <EventDisplay />
      </section>
    </>
  );
}
