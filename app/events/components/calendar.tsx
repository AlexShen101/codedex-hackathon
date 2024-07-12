"use client";

import { CalendarOptions, EventClickArg } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import FullCalendar from "@fullcalendar/react";
import { useRouter } from "next/navigation";
import "../calendar/overrides.css";

interface CalendarProps extends CalendarOptions {}

const computeSquareLink = (event: any) => {
  const regex = /https:\/\/square\.link\/u\/([a-zA-Z0-9]+)/;
  const match = event.squareUrl.match(regex);
  let eventUrl = `/events/`;

  if (match) {
    eventUrl = `/events/${match[1]}`;
  } else {
    console.error(`Invalid squareUrl: ${event.squareUrl}`);
    eventUrl = `/events`;
  }
  return eventUrl;
};

export default function Calendar(props: CalendarProps) {
  const router = useRouter();

  const handleClick = (arg: EventClickArg) => {
    router.push(computeSquareLink(arg.event._def.extendedProps));
    console.log(arg);
  };

  return (
    <FullCalendar
      eventClick={handleClick}
      events={props.events}
      plugins={[dayGridPlugin]}
      initialView="dayGridMonth"
    />
  );
}
