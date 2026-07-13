"use client";

import { useEffect, useState } from "react";
import EventCard from "../events/EventCard";

interface Event {
  _id: string;
  title: string;
  shortDescription: string;
  image: string;
  category: string;
  location: string;
  date: string;
  price: number;
  rating?: number;
}

const FeaturedEvents = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeaturedEvents = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/events`
        );

        const data = await res.json();

        if (data.success) {
          // Show only latest 8 events
          setEvents(data.data.slice(0, 8));
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchFeaturedEvents();
  }, []);

  if (loading) {
    return (
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <p>Loading events...</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4">
        {/* Heading */}
        <div className="mb-10 text-center">
          <p className="font-semibold uppercase tracking-wider text-primary">
            Featured Events
          </p>

          <h2 className="mt-2 text-4xl font-bold">
            Discover Upcoming Experiences
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-500">
            Explore handpicked events designed to inspire learning,
            networking, creativity, and unforgettable experiences.
          </p>
        </div>

        {/* Events */}
        {events.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {events.map((event) => (
              <EventCard key={event._id} event={event} />
            ))}
          </div>
        ) : (
          <div className="py-10 text-center">
            <h3 className="text-xl font-semibold">
              No Events Available
            </h3>
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedEvents;