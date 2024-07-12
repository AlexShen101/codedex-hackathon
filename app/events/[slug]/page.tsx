import Image from 'next/image';
import Link from 'next/link';

// pages/events/[slug].js
export default async function EventPage({
  params,
}: {
  params: { slug: string };
}) {
  const res = await fetch(`${process.env.STRAPI_API_URL}/event-time-slots?filters[squareurl][$eq]=https://square.link/u/${params.slug}&populate=event`, {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_API_SECRET}`,
    },
  });
  const data = await res.json();

  let event = null;

  let timeSlot = data.data ? data.data[0].attributes : null

  if (!timeSlot) {
    return <div>Square Link not found.</div>;
  }

  let eventDetails = timeSlot.event.data ? timeSlot.event.data.attributes : null

  if (!eventDetails) {
    return <div>Event not found.</div>;
  }

  event = {
    title: eventDetails.title,
    description: eventDetails.description,
    date: new Date(timeSlot.datetime),
    squareUrl: timeSlot.squareurl,
  }

  const today = new Date()
  const diffTime = event.date.getTime() - today.getTime()
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

  const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  const dayOfWeek = weekDays[event.date.getDay()]

  const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  const month = monthNames[event.date.getMonth()]

  let hours = event.date.getHours();
  const minutes = event.date.getMinutes();
  const ampm = hours >= 12 ? 'PM' : 'AM';
  // Convert to 12-hour format
  hours = hours % 12 || 12;
  const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;

  const formattedTime = `${hours}:${formattedMinutes} ${ampm}`;

  return (
    <div className="flex flex-col items-center">
      <div className="bg-black w-full flex items-center justify-center">
        <Image
          src="/magic_the_gathering/logo.png"
          alt="Magic the Gathering logo"
          width={600}
          height={200}
          className="w-[60%]"
        />
      </div>
      <div className="desktop-container">
        <div className="grid grid-cols-2 gap-4 w-fit mt-16 mb-16">
          <div className="bg-white p-8 rounded-lg shadow-custom h-fit">
            <h1 className="text-4xl font-bold mb-8">{event.title}</h1>
            <a
              href={event.squareUrl}
              className="bg-black text-2xl text-green py-2 px-4 rounded-lg font-semibold w-full inline-block text-center shadow-custom"
            >
              Register for Event
            </a>
            <h1 className="text-2xl font-bold mb-2 mt-16">Event Description</h1>
            <p className="whitespace-pre-wrap">{event.description}</p>
          </div>
          <div className="bg-black text-white p-8 rounded-xl shadow-custom ml-8 h-fit">
            <div className="flex items-center mb-4 bg-green py-1 px-3 rounded-full w-fit">
              <div className="bg-black w-3 h-3 rounded-full mr-2"></div>
              <span className="text-black">{diffDays < 0 ? "Event has passed." : `${diffDays} days till the event.`}</span>
            </div>
            <div className="mb-4">
              <h3 className="text-lg font-bold">Date & Time</h3>
              <p>{dayOfWeek}, {month} {event.date.getDay()}</p>
              <p>{formattedTime} EDT</p>
            </div>
            <div className="mb-4">
              <h3 className="text-lg font-bold">Location</h3>
              <p>471 5th Ave NY 11215</p>
            </div>
            <hr className="border-green mb-4" />
            <div className="flex flex-wrap">
              <div className="bg-white text-black py-1 px-3 rounded-full mr-2 mb-2">
                Magic the Gathering
              </div>
              <div className="bg-white text-black py-1 px-3 rounded-full mr-2 mb-2">
                Card Game
              </div>
              <div className="bg-white text-black py-1 px-3 rounded-full mr-2 mb-2">
                Fantasy
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
