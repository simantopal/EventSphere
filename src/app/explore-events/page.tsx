"use client";

import EventGrid from "@/components/events/EventGrid";
import Filter from "@/components/events/Filter";
import Pagination from "@/components/events/Pagination";
import { useEffect, useMemo, useState } from "react";

interface Event {
  _id: string;
  title: string;
  shortDescription: string;
  image: string;
  category: string;
  location: string;
  date: string;
  price: number;
  totalSeats: number;
  rating?: number;
}

const ITEMS_PER_PAGE = 8;

export default function EventsPage() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");
  const [sort, setSort] = useState("");

  const [currentPage, setCurrentPage] = useState(1);

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

  const filteredEvents = useMemo(() => {
    let filtered = [...events];

    if (category) {
      filtered = filtered.filter(
        (event) => event.category === category
      );
    }

    if (location) {
      filtered = filtered.filter(
        (event) => event.location === location
      );
    }

    if (sort === "price-low") {
      filtered.sort((a, b) => a.price - b.price);
    }

    if (sort === "price-high") {
      filtered.sort((a, b) => b.price - a.price);
    }

    if (sort === "latest") {
      filtered.sort(
        (a, b) =>
          new Date(b.date).getTime() -
          new Date(a.date).getTime()
      );
    }

    return filtered;
  }, [events, category, location, sort]);

  const totalPages = Math.ceil(
    filteredEvents.length / ITEMS_PER_PAGE
  );

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;

  const currentEvents = filteredEvents.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  if (loading) {
    return (
      <section className="flex min-h-screen items-center justify-center">
        <h2 className="text-xl font-semibold">
          Loading events...
        </h2>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-background py-10">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold">
            Explore Events
          </h1>

          <p className="mx-auto mt-3 max-w-2xl text-gray-400">
            Discover exciting events happening around you.
            Search, filter and find the perfect event.
          </p>
        </div>

        <div className="mb-8">
          <Filter
            category={category}
            location={location}
            sort={sort}
            onCategoryChange={(value) => {
              setCategory(value);
              setCurrentPage(1);
            }}
            onLocationChange={(value) => {
              setLocation(value);
              setCurrentPage(1);
            }}
            onSortChange={(value) => {
              setSort(value);
              setCurrentPage(1);
            }}
          />
        </div>

        {currentEvents.length > 0 ? (
          <>
            <EventGrid events={currentEvents} />

            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={(page) => {
                setCurrentPage(page);

                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
            />
          </>
        ) : (
          <div className="py-20 text-center">
            <h2 className="text-2xl font-semibold">
              No Events Found
            </h2>

            <p className="mt-2 text-gray-500">
              There are no events matching your filters.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}