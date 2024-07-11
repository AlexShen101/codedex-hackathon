import HeroSection from "./components/heroSection";
import EventCard from "./components/eventCard";

interface Event {
  title: string;
  description: string;
  coverImage: string;
  date: Date;
}

const sampleEvents = [
  {
    title: "Magic the Gathering: Modern Horizons 3 Pre-release",
    description: "Enjoy the Modern Horizons 3 Pre-release event with friends and family!",
    coverImage: "https://placehold.co/400x200",
    date: new Date('2024-07-12T18:00:00') // July 12, 2024, 6:00 PM
  },
  {
    title: "Community Art Exhibition",
    description: "Local artists showcase their work in a community setting.",
    coverImage: "https://placehold.co/400x200",
    date: new Date('2024-08-05T15:00:00') // August 5, 2024, 3:00 PM
  },
  {
    title: "Outdoor Yoga Session",
    description: "Join us for a relaxing outdoor yoga session in the park.",
    coverImage: "https://placehold.co/400x200",
    date: new Date('2024-09-10T08:00:00') // September 10, 2024, 8:00 AM
  },
  {
    title: "Tech Meetup: AI and Machine Learning",
    description: "Discuss the latest trends in AI and machine learning with industry experts.",
    coverImage: "https://placehold.co/400x200",
    date: new Date('2024-10-15T19:00:00') // October 15, 2024, 7:00 PM
  },
  {
    title: "Charity Run for Local Schools",
    description: "Participate in a charity run to support local schools and education.",
    coverImage: "https://placehold.co/400x200",
    date: new Date('2024-11-20T07:00:00') // November 20, 2024, 7:00 AM
  },
  {
    title: "Holiday Craft Fair",
    description: "Shop for unique handmade crafts and gifts for the holiday season.",
    coverImage: "https://placehold.co/400x200",
    date: new Date('2024-12-05T10:00:00') // December 5, 2024, 10:00 AM
  },
  {
    title: "Winter Concert Series",
    description: "Enjoy live music performances by local bands and musicians.",
    coverImage: "https://placehold.co/400x200",
    date: new Date('2025-01-18T20:00:00') // January 18, 2025, 8:00 PM
  },
  {
    title: "Spring Gardening Workshop",
    description: "Learn tips and tricks for successful gardening in the spring.",
    coverImage: "https://placehold.co/400x200",
    date: new Date('2025-02-25T09:00:00') // February 25, 2025, 9:00 AM
  },
  {
    title: "Culinary Arts Festival",
    description: "Experience culinary delights from chefs around the region.",
    coverImage: "https://placehold.co/400x200",
    date: new Date('2025-03-30T12:00:00') // March 30, 2025, 12:00 PM
  }
];

export default async function Events() {
  const res = await fetch("http://127.0.0.1:3000/api/events");
  const data = await res.json();

  return (
    <div className="bg-white">
      <HeroSection />
      <div className="px-16 py-8">
        <div className="bg-black text-green mr-[25rem] ml-[25rem] p-16 rounded-xl shadow-lg flex space-x-16 rounded-3xl">
          <div>
            <label className="block text-sm mb-2">Search Event</label>
            <input className="text-2xl font-semibold bg-black text-green" placeholder="Magic the Gathering"></input>
            <div className="border-b-2 border-green mt-2"></div>
          </div>
          <div>
            <label className="block text-sm mb-2">Time</label>
            <div className="flex items-center">
              <input type="date" className="text-2xl font-semibold" placeholder="Any date"></input>
              <i className="fas fa-chevron-down ml-2"></i>
            </div>
            <div className="border-b-2 border-green-500 mt-2"></div>
          </div>
        </div>
        <div className="flex mt-16 mb-16 justify-between items-center">
          <h1 className="text-5xl font-bold text-black">Upcoming Events</h1>
          <div className="flex space-x-4">
            <select className="bg-black text-green rounded-full px-8 py-4">
              <option>Weekdays</option>
              <option value="monday">Monday</option>
              <option value="tuesday">Tuesday</option>
              <option value="wednesday">Wednesday</option>
              <option value="thursday">Thursday</option>
              <option value="friday">Friday</option>
            </select>
            <select className="bg-black text-green rounded-full px-8 py-4">
              <option>Event Type</option>
              <option value="conference">Conference</option>
              <option value="workshop">Workshop</option>
              <option value="seminar">Seminar</option>
              <option value="webinar">Webinar</option>
            </select>
            <select className="bg-black text-green rounded-full px-8 py-4">
              <option>Any Category</option>
              <option value="tech">Technology</option>
              <option value="art">Art</option>
              <option value="music">Music</option>
              <option value="sports">Sports</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          {sampleEvents.map((event, index) => (
            <EventCard key={index} event={event} />
          ))}
        </div>
      </div>
    </div>
  )
}
