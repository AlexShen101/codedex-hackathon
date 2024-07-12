import EventCard from "@/app/events/components/eventCard"

export default async function EventDisplay() {
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

  // sort events by date
  events.sort((a, b) => a.date.getTime() - b.date.getTime())

  const today = new Date();
  // Filter events to only include those after today, and then slice the 3 closest ones
  const upcomingEvents = events.filter((event) => event.date >= today).slice(0, 3);

  return (
    <>
      <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-4">
        {upcomingEvents.map((event, index) => (
          <EventCard key={index} event={event} />
        ))}
      </div>
    </>
  )
}