"use client"
import EventGrid from "@/components/events/EventGrid";
import Filter from "@/components/events/Filter";
import { useState } from "react";

export default function EventsPage() {
    const [category, setCategory] = useState("");
    const [location, setLocation] = useState("");
    const [sort, setSort] = useState("");
    const events = [
        {
            _id: "1",
            title: "Tech Conference 2026",
            shortDescription: "Join the biggest tech conference.",
            image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800",
            category: "Technology",
            location: "Dhaka",
            date: "2026-08-15",
            price: 500,
            rating: 4.8,
        },
    ];
    return (
        <section className="min-h-screen bg-background py-10">
            <div className="mx-auto max-w-7xl px-4">
                {/* Page Header */}
                <div className="mb-8 text-center">
                    <h1 className="text-4xl font-bold">
                        Explore Events
                    </h1>
                    <p className="mt-3 text-gray-400 max-w-2xl mx-auto">
                        Discover exciting events happening around you. Search, filter,
                        and find the perfect event to attend.
                    </p>
                </div>

                {/* Filters */}
                <div className="mb-8">
                    <Filter category={category}
                        location={location}
                        sort={sort}
                        onCategoryChange={setCategory}
                        onLocationChange={setLocation}
                        onSortChange={setSort} />
                </div>

                {/* Events */}
                <EventGrid events={events} />

                {/* Pagination */}
                {/* <div className="mt-10 flex justify-center">
          <Pagination />
        </div> */}
            </div>
        </section>
    );
}