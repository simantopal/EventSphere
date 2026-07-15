"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

interface Event {
    _id: string;
    title: string;
    category: string;
    location: string;
    date: string;
    price: number;
    image: string;
}

const ManageEventsPage = () => {
    const router = useRouter();
    const [events, setEvents] = useState<Event[]>([]);
    const [loading, setLoading] = useState(true);

    const { data: session, isPending } = authClient.useSession();

    useEffect(() => {
        if (!isPending && !session) {
            router.replace("/auth/login");
            return;
        }

        if (!session?.user?.email) return;

        const fetchEvents = async () => {
            try {
                const res = await fetch(
                    `${process.env.NEXT_PUBLIC_API_URL}/manage?email=${session.user.email}`
                );

                const data = await res.json();

                if (data.success) {
                    setEvents(data.data);
                }
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchEvents();
    }, [session, isPending, router]);

    const handleDelete = async (id: string) => {
        const confirmDelete = confirm("Are you sure?");

        if (!confirmDelete) return;

        try {
            const res = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/events/${id}`,
                {
                    method: "DELETE",
                }
            );

            const data = await res.json();

            if (data.success) {
                setEvents((prev) => prev.filter((event) => event._id !== id));
            }
        } catch (error) {
            console.error(error);
        }
    };

    if (isPending) {
        return (
            <div className="flex min-h-screen items-center justify-center">
                Loading...
            </div>
        );
    }
    if (!session) return null;

    return (
        <section className="min-h-screen bg-background py-10">
            <div className="mx-auto max-w-7xl px-4">
                {/* Header */}
                <div className="mb-10 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
                    <div>
                        <h1 className="text-4xl font-bold">Manage Events</h1>
                        <p className="mt-2 text-muted-foreground">
                            View, manage, and delete the events you have created.
                        </p>
                    </div>

                    <Link
                        href="/events/add-events"
                        className="rounded-lg bg-blue-600 px-5 py-3 font-medium text-white transition hover:bg-blue-700"
                    >
                        + Add New Event
                    </Link>
                </div>

                {events.length === 0 ? (
                    <div className="rounded-2xl border border-dashed py-20 text-center">
                        <h2 className="text-2xl font-semibold">No Events Found</h2>
                        <p className="mt-2 text-gray-500">
                            You haven`t published any events yet.
                        </p>

                        <Link
                            href="/events/add"
                            className="mt-6 inline-block rounded-lg bg-blue-600 px-5 py-3 text-white"
                        >
                            Create Your First Event
                        </Link>
                    </div>
                ) : (
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {events.map((event) => (
                            <div
                                key={event._id}
                                className="overflow-hidden rounded-2xl border bg-background shadow-sm transition hover:shadow-lg"
                            >
                                <img
                                    src={event.image}
                                    alt={event.title}
                                    className="h-52 w-full object-cover"
                                />

                                <div className="space-y-4 p-5">
                                    <div>
                                        <h2 className="line-clamp-1 text-xl font-semibold">
                                            {event.title}
                                        </h2>

                                        <p className="mt-1 text-sm text-gray-500">
                                            {event.category}
                                        </p>
                                    </div>

                                    <div className="space-y-2 text-sm text-gray-500">
                                        <p>
                                            📅 <span className="font-medium">{event.date}</span>
                                        </p>

                                        <p>
                                            📍 <span className="font-medium">{event.location}</span>
                                        </p>

                                        <p>
                                            💵 <span className="font-medium">${event.price}</span>
                                        </p>
                                    </div>

                                    <div className="flex gap-2 pt-2">
                                        <Link
                                            href={`/explore-events/${event._id}`}
                                            className="flex-1 rounded-lg bg-blue-600 py-2 text-center text-sm font-medium text-white transition hover:bg-blue-700"
                                        >
                                            View
                                        </Link>

                                        <button
                                            onClick={() => handleDelete(event._id)}
                                            className="flex-1 rounded-lg bg-red-600 py-2 text-sm font-medium text-white transition hover:bg-red-700"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default ManageEventsPage;