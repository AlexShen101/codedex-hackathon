import Image from 'next/image';

interface Event {
  title: string;
  description: string;
  coverImage: string;
  date: Date;
}

interface EventCardProps {
  event: Event;
}

export default function EventCard({ event }: EventCardProps) {
  const monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

  const month = monthNames[event.date.getMonth()];
  const day = event.date.getDate();
  const hours = event.date.getHours();
  const minutes = event.date.getMinutes();
  const ampm = hours >= 12 ? 'PM' : 'AM';
  const formattedTime = `${hours % 12 || 12}:${minutes < 10 ? '0' : ''}${minutes} ${ampm}`;

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-md">
      <div className="relative">
        <img src={event.coverImage} alt={`${event.title} event banner`} className="w-full h-48 object-cover" />
      </div>
      <div className="p-4 bg-black text-white flex">
        <div className="text-center pr-4 flex-shrink-0">
          <div className="text-green text-sm font-semibold">{month}</div>
          <div className="text-5xl font-semibold">{day}</div>
          <div className="text-green text-xs font-semibold">{formattedTime}</div>
        </div>
        <div className="pl-4 flex-grow">
          <div className="text-green font-bold text-md">{event.title}</div>
          <div className="text-green font-semibold">{event.description}</div>
          <div className="text-sm mt-2">
            Enjoy the {event.title} event with friends and family!
          </div>
        </div>
      </div>
    </div>
  );
}
