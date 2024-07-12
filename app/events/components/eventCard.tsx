import Image from "next/image";
import Link from "next/link";

import "./styles.css";

interface CoverImage {
  width: number;
  height: number;
  url: string;
}

interface Event {
  title: string;
  description: string | null;
  coverImage: CoverImage | null;
  date: Date;
  squareUrl: string;
}

interface EventCardProps {
  event: Event;
}

export default function EventCard({ event }: EventCardProps) {
  // get month, day, hours, minutes, and am/pm for user friendly date display
  const monthNames = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];

  const month = monthNames[event.date.getMonth()];
  const day = event.date.getDate();
  const hours = event.date.getHours();
  const minutes = event.date.getMinutes();
  const ampm = hours >= 12 ? "PM" : "AM";
  const formattedTime = `${hours % 12 || 12}:${
    minutes < 10 ? "0" : ""
  }${minutes} ${ampm}`;

  // scrape squareUrl ID which maps to the event "ID"
  const regex = /https:\/\/square\.link\/u\/([a-zA-Z0-9]+)/;
  const match = event.squareUrl.match(regex);
  let eventUrl = `/events/`;

  // generate the url to the events page
  if (match) {
    eventUrl = `/events/${match[1]}`;
  } else {
    console.error(`Invalid squareUrl: ${event.squareUrl}`);
  }

  return (
    <Link href={eventUrl}>
      <div className="bg-white rounded-lg shadow-lg overflow-hidden sm:w-full md:max-w-2xl lg:max-w-4xl">
        <div className="relative">
          {event.coverImage ? (
            <Image
              src={process.env.STRAPI_BASE_URL + event.coverImage.url}
              alt={`${event.title} event banner`}
              width={event.coverImage.width}
              height={event.coverImage.height}
              className="w-full h-48 object-cover"
            />
          ) : (
            <img
              src="https://placehold.co/500x200"
              alt={`${event.title} event banner`}
              className="w-full h-48 object-cover"
            />
          )}
        </div>
        <div className="p-4 bg-black text-white flex">
          <div className="text-center pr-4 flex-shrink-0">
            <div className="text-crispy-green text-sm font-semibold">
              {month}
            </div>
            <div className="text-5xl font-semibold">{day}</div>
            <div className="text-crispy-green text-xs font-semibold">
              {formattedTime}
            </div>
          </div>
          <div className="pl-4 flex-grow">
            <div className="text-crispy-green font-bold text-md">
              {event.title}
            </div>
            {event.description ? (
              <div className="text-crispy-green font-semibold overflow-ellipsis-multiline">
                {event.description}
              </div>
            ) : (
              <div className="text-crispy-green font-semibold">
                Enjoy the {event.title} event with friends and family!
              </div>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
