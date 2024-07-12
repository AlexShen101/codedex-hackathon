import Image from 'next/image';
import Link from 'next/link';

// pages/events/[slug].js
export default async function EventPage({ params }: { params: { slug: string } }) {
    console.log(params)
    const res = await fetch(`${process.env.NEXT_API_URL}/api/events`);
    const data = await res.json();

    let event = null;

    for (const dataEvent of data.data) {
        let attributes = dataEvent.attributes
        let timeSlots = attributes.event_time_slots.data

        let coverImage = null

        if (attributes.coverimage.data) {
            coverImage = {
                width: attributes.coverimage.data.attributes.width,
                height: attributes.coverimage.data.attributes.height,
                url: attributes.coverimage.data.attributes.url
            }
        }

        for (const timeSlot of timeSlots) {
            let squareUrl = timeSlot.attributes.squareurl

            const regex = /https:\/\/square\.link\/u\/([a-zA-Z0-9]+)/;
            const match = squareUrl.match(regex);

            if (match) {
                if (match[1] == params.slug) {
                    event = {
                        title: attributes.title,
                        description: attributes.description,
                        coverImage: coverImage,
                        date: new Date(timeSlot.attributes.datetime),
                        squareUrl: squareUrl
                    }
                }
            }
        }
    }

    if (!event) {
        return <div>Event not found.</div>
    }

    console.log(event)


    return (
        <div className="flex flex-col items-center">
            <div className="bg-black w-full flex items-center justify-center">
                <Image src="/magic_the_gathering/logo.png" alt="Magic the Gathering logo" width={600} height={200} className="w-[60%]" />
            </div>
            <div className="desktop-container">
                <div className="grid grid-cols-2 gap-4 w-fit mt-16 mb-16">
                    <div className="bg-white p-8 rounded-lg shadow-custom h-fit">
                        <h1 className="text-4xl font-bold mb-8">{event.title}</h1>
                        <Link href={event.squareUrl} className="bg-black text-2xl text-green py-2 px-4 rounded-lg font-semibold w-full inline-block text-center shadow-custom">Register for Event</Link>
                        <h1 className="text-2xl font-bold mb-2 mt-16">Event Description</h1>
                        <p className="whitespace-pre-wrap">{event.description}</p>
                    </div>
                    <div className="bg-black text-white p-8 rounded-xl shadow-custom ml-8 h-fit">
                        <div className="flex items-center mb-4 bg-green py-1 px-3 rounded-full w-fit">
                            <div className="bg-black w-3 h-3 rounded-full mr-2"></div>
                            <span className="text-black">10 days to event</span>
                        </div>
                        <div className="mb-4">
                            <h3 className="text-lg font-bold">Date & Time</h3>
                            <p>Fri, Jun 7</p>
                            <p>6:00 PM - 11:00 PM EDT</p>
                        </div>
                        <div className="mb-4">
                            <h3 className="text-lg font-bold">Location</h3>
                            <p>471 5th Ave NY 11215</p>
                        </div>
                        <hr className="border-green mb-4" />
                        <div className="flex flex-wrap">
                            <div className="bg-white text-black py-1 px-3 rounded-full mr-2 mb-2">Magic the Gathering</div>
                            <div className="bg-white text-black py-1 px-3 rounded-full mr-2 mb-2">Card Game</div>
                            <div className="bg-white text-black py-1 px-3 rounded-full mr-2 mb-2">Fantasy</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
