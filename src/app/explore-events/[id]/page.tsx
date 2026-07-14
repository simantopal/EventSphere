import Image from "next/image";
import {
    CalendarDays,
    Clock,
    MapPin,
    Star,
    Ticket,
} from "lucide-react";
import BookTicketModal from "@/components/shared/BookTicketModal";

interface PageProps {
    params: Promise<{
        id: string;
    }>;
}

async function getEvent(id: string) {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/events/${id}`,
        {
            cache: "no-store",
        }
    );

    if (!res.ok) {
        const error = await res.text();
        console.log(error);

        throw new Error("Failed to fetch event");
    }

    const result = await res.json();

    return result.data;
}

const EventDetailsPage = async ({ params }: PageProps) => {
    const { id } = await params;

    const event = await getEvent(id);

    return (
        <section className="mx-auto max-w-7xl px-4 py-10">
            <div className="grid gap-10 lg:grid-cols-2">
                {/* Image */}
                <div className="overflow-hidden rounded-2xl">
                    <Image
                        src={event.image}
                        alt={event.title}
                        width={900}
                        height={700}
                        className="h-full w-full object-cover"
                    />
                </div>

                {/* Info */}
                <div className="flex flex-col justify-center">
                    <span className="mb-3 w-fit rounded-full bg-indigo-100 px-4 py-1 text-sm font-medium text-indigo-600">
                        {event.category}
                    </span>

                    <h1 className="text-4xl font-bold">{event.title}</h1>

                    <p className="mt-4 text-gray-600">
                        {event.shortDescription}
                    </p>

                    <div className="mt-6 space-y-4">
                        <div className="flex items-center gap-3">
                            <CalendarDays size={20} />
                            <span>Date: {event.date}</span>
                        </div>

                        <div className="flex items-center gap-3">
                            <Clock size={20} />
                            <span>Time: {event.time}</span>
                        </div>

                        <div className="flex items-center gap-3">
                            <MapPin size={20} />
                            <span>Location: {event.location}</span>
                        </div>

                        <div className="flex items-center gap-3">
                            <Ticket size={20} />
                            <span className="font-semibold text-indigo-600">
                                Price: ${event.price}
                            </span>
                        </div>

                        <div className="flex items-center gap-2">
                            <Star
                                size={18}
                                className="fill-yellow-400 text-yellow-400"
                            />
                            <span>Rating{event.rating}</span>
                        </div>
                    </div>

                    <BookTicketModal event={event} />
                </div>
            </div>

            {/* About This Event */}
            <section className="mt-16">
                <div className="rounded-3xl border border-gray-200 bg-background p-8 shadow-sm">
                    <div className="mb-6 flex items-center gap-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100">
                            <Ticket className="h-6 w-6 text-indigo-600" />
                        </div>

                        <div>
                            <h2 className="text-3xl font-bold text-violet-600">
                                About This Event
                            </h2>
                            <p className="text-sm text-gray-400">
                                Learn more about this event before booking your ticket.
                            </p>
                        </div>
                    </div>

                    <div className="space-y-5 text-justify leading-8">
                        <p>{event.fullDescription}</p>
                    </div>
                </div>
            </section>

        </section>
    );
};

export default EventDetailsPage;