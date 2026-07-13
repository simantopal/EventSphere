"use client";

import EventGrid from "@/components/events/EventGrid";
import Filter from "@/components/events/Filter";
import { useEffect, useState } from "react";

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

export default function EventsPage() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");
  const [sort, setSort] = useState("");

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/events`
        );

        const data = await res.json();

        if (data.success) {
          setEvents(data.data);
        }
      } catch (error) {
        console.error("Failed to fetch events:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  if (loading) {
    return (
      <section className="min-h-screen flex items-center justify-center">
        <h2 className="text-xl font-semibold">Loading events...</h2>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-background py-10">
      <div className="mx-auto max-w-7xl px-4">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold">
            Explore Events
          </h1>

          <p className="mx-auto mt-3 max-w-2xl text-gray-400">
            Discover exciting events happening around you. Search, filter,
            and find the perfect event to attend.
          </p>
        </div>

        {/* Filter */}
        <div className="mb-8">
          <Filter
            category={category}
            location={location}
            sort={sort}
            onCategoryChange={setCategory}
            onLocationChange={setLocation}
            onSortChange={setSort}
          />
        </div>

        {/* Events */}
        {events.length > 0 ? (
          <EventGrid events={events} />
        ) : (
          <div className="py-20 text-center">
            <h2 className="text-2xl font-semibold">
              No Events Found
            </h2>
            <p className="mt-2 text-gray-500">
              There are no events available right now.
            </p>
          </div>
        )}

        {/* Pagination */}
        {/* <Pagination /> */}
      </div>
    </section>
  );
}