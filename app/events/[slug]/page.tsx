import Image from "next/image";

// pages/events/[slug].js
export default async function EventPage({
  params,
}: {
  params: { slug: string };
}) {
  // get event details from Strapi api - searches for the specific time slot with this square url, and then uses that to determine which event should be displayed
  const res = await fetch(
    `${process.env.STRAPI_API_URL}/event-time-slots?filters[squareurl][$eq]=https://square.link/u/${params.slug}&populate[event][populate][0]=coverimage`,
    {
      headers: {
        Authorization: `Bearer ${process.env.STRAPI_API_SECRET}`,
      },
    }
  );
  const data = await res.json();

  let event = null;

  // initialize the timeSlot variable depending on whether data is returned
  let timeSlot = data.data ? data.data[0].attributes : null;
  if (!timeSlot) {
    return <div>Square Link not found.</div>;
  }

  let eventDetails = timeSlot.event.data
    ? timeSlot.event.data.attributes
    : null;

  // check if the fetch req returned event Details
  if (!eventDetails) {
    return <div>Event not found.</div>;
  }

  // generate image url to embed
  const imageUrl = eventDetails?.coverimage?.data?.attributes?.url
    ? process.env.NODE_ENV === "development" ||
      typeof process.env.NODE_ENV === "undefined"
      ? `${process.env.STRAPI_BASE_URL}${
          eventDetails.coverimage?.data?.attributes?.url || undefined
        }`
      : eventDetails.coverimage?.data?.attributes?.url || undefined
    : undefined;

  console.log(JSON.stringify(eventDetails.coverimage?.data?.attributes));

  // construct event info
  event = {
    title: eventDetails.title,
    description: eventDetails.description,
    date: new Date(timeSlot.datetime),
    squareUrl: timeSlot.squareurl,
    coverImage: imageUrl,
  };

  // calcualte days till event
  const today = new Date();
  const diffTime = event.date.getTime() - today.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  // convert date into user friendly display format
  const weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dayOfWeek = weekDays[event.date.getDay()];

  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const month = monthNames[event.date.getMonth()];

  let hours = event.date.getHours();
  const minutes = event.date.getMinutes();
  const ampm = hours >= 12 ? "PM" : "AM";
  // Convert to 12-hour format
  hours = hours % 12 || 12;
  const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;

  const formattedTime = `${hours}:${formattedMinutes} ${ampm}`;

  return (
    <div className="flex flex-col items-center">
      <div className="bg-black w-full flex items-center justify-center max-h-[350px] overflow-hidden relative">
        <div className="grid grid-cols-2 absolute top-0 w-full h-full">
          <div
            style={{
              background:
                "linear-gradient(to right, rgba(22,18,20,1), rgba(22,18,20,0))",
            }}
          ></div>
          <div
            style={{
              background:
                "linear-gradient(to left, rgba(0,0,0,1), rgba(0,0,0,0))",
            }}
          ></div>
        </div>
        <Image
          className="w-[60%]"
          src={
            event.coverImage
              ? event.coverImage
              : "/magic_the_gathering/logo.png"
          }
          alt="Magic the Gathering logo"
          width={600}
          height={200}
        />
      </div>
      <div className="desktop-container">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 w-fit mt-16 mb-16">
          <div className="bg-white p-8 rounded-lg border border-neutral-400 h-fit">
            <h1 className="text-4xl font-bold mb-8">{event.title}</h1>
            <a
              href={event.squareUrl}
              className="bg-black text-2xl text-crispy-green py-2 px-4 rounded-lg font-semibold w-full inline-block text-center"
            >
              Register for Event
            </a>
            <h1 className="text-2xl font-bold mb-2 mt-16">Event Description</h1>
            <p className="whitespace-pre-wrap">{event.description}</p>
          </div>
          <div className="bg-black text-white p-8 rounded-xl shadow-custom ml-8 h-fit">
            <div className="flex items-center mb-4 bg-crispy-green py-1 px-3 rounded-full w-fit">
              <div className="bg-black w-3 h-3 rounded-full mr-2"></div>
              <span className="text-black">
                {diffDays < 0
                  ? "Event has passed."
                  : `${diffDays} days till the event.`}
              </span>
            </div>
            <div className="mb-4">
              <h3 className="text-lg font-bold">Date & Time</h3>
              <p>
                {dayOfWeek}, {month} {event.date.getDay()}
              </p>
              <p>{formattedTime} EDT</p>
            </div>
            <div className="mb-4">
              <h3 className="text-lg font-bold">Location</h3>
              <p>471 5th Ave NY 11215</p>
            </div>
            <hr className="border-crispy-green mb-4" />
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
