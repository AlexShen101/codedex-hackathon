import HeroSection from "@/components/heroSection";
import { DM_Serif_Display } from "next/font/google";
import Calendar from "../components/calendar";

const dmSerifDisplay = DM_Serif_Display({
  subsets: ["latin-ext"],
  weight: ["400"],
});

export default async function CalendarPage() {
  const res = await fetch(`${process.env.STRAPI_API_URL}/events?populate=*`, {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_API_SECRET}`,
    },
  });
  const data = await res.json();

  let events = [];

  for (const dataEvent of data.data) {
    let attributes = dataEvent.attributes;
    let timeSlots = attributes.event_time_slots.data;

    let coverImage = null;

    if (attributes.coverimage.data) {
      coverImage = {
        width: attributes.coverimage.data.attributes.width,
        height: attributes.coverimage.data.attributes.height,
        url: attributes.coverimage.data.attributes.url,
      };
    }

    for (const timeSlot of timeSlots) {
      let event = {
        title: attributes.title,
        description: attributes.description,
        coverImage: coverImage,
        date: new Date(timeSlot.attributes.datetime),
        squareUrl: timeSlot.attributes.squareurl,
      };

      events.push(event);
    }
  }

  const navigate = console.log("EVENTS", events);

  return (
    <div className="flex flex-col">
      <HeroSection />
      <section className="desktop-container py-6 px-12">
        <Calendar events={events} />
      </section>
      <section className="desktop-container flex flex-col items-center px-12"></section>
    </div>
  );
}
