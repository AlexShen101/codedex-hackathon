import { DM_Serif_Display } from "next/font/google";
import { FaChevronDown } from "react-icons/fa";
import EventCard from "./components/eventCard";
import HeroSection from "./components/heroSection";

const dmSerifDisplay = DM_Serif_Display({
  subsets: ["latin-ext"],
  weight: ["400"],
});

export default async function Events() {
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

  return (
    <div className="flex flex-col">
      <HeroSection />
      <section className="desktop-container py-6 px-12">
        <div className="flex flex-col md:flex-row bg-black text-crispy-green p-12 rounded-xl shadow-lg md:justify-center md:items-end gap-8">
          <div>
            <label className="block text-sm mb-2">Search Event</label>
            <input
              className="text-2xl font-semibold bg-black text-crispy-green"
              placeholder="Magic the Gathering"
            ></input>
            <div className="border-b-2 border-crispy-green mt-1"></div>
          </div>

          <div>
            <label className="block text-sm mb-2">Time</label>
            <div className="flex items-center">
              <input
                type="date"
                className="text-2xl font-semibold bg-transparent"
                placeholder="Any date"
              ></input>
              <FaChevronDown />
            </div>
            <div className="border-b-2 border-crispy-green mt-1"></div>
          </div>
        </div>
      </section>
      <section className="desktop-container flex flex-col items-center px-12">
        <div className="flex flex-col md:flex-row my-16 gap-12 justify-between items-center w-full">
          <h1
            className={`${dmSerifDisplay.className} text-5xl font-bold text-black`}
          >
            Upcoming Events
          </h1>
          <div className="flex space-x-4">
            <select className="bg-black text-crispy-green rounded-full px-8 py-4">
              <option>Weekdays</option>
              <option value="monday">Monday</option>
              <option value="tuesday">Tuesday</option>
              <option value="wednesday">Wednesday</option>
              <option value="thursday">Thursday</option>
              <option value="friday">Friday</option>
            </select>
            <select className="bg-black text-crispy-green rounded-full px-8 py-4">
              <option>Event Type</option>
              <option value="conference">Conference</option>
              <option value="workshop">Workshop</option>
              <option value="seminar">Seminar</option>
              <option value="webinar">Webinar</option>
            </select>
            <select className="bg-black text-crispy-green rounded-full px-8 py-4">
              <option>Any Category</option>
              <option value="tech">Technology</option>
              <option value="art">Art</option>
              <option value="music">Music</option>
              <option value="sports">Sports</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {events.map((event, index) => (
            <EventCard key={index} event={event} />
          ))}
        </div>
      </section>
    </div>
  );
}
