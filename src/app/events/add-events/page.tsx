"use client"
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const AddEventPage = () => {
    const router = useRouter();
    const { data: session, isPending } = authClient.useSession();
    const user = session?.user;


    useEffect(() => {
        if (!isPending && !session) {
            router.replace("/auth/login");
        }
    }, [session, isPending, router]);

    if (isPending) {
        return (
            <div className="flex min-h-screen items-center justify-center">
                Loading...
            </div>
        );
    }
    if (!session) return null;

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const form = e.currentTarget;
        const formData = new FormData(form);

        const eventData = {
            title: formData.get("title"),
            category: formData.get("category"),
            shortDescription: formData.get("shortDescription"),
            fullDescription: formData.get("fullDescription"),
            date: formData.get("date"),
            time: formData.get("time"),
            location: formData.get("location"),
            price: Number(formData.get("price")),
            totalSeats: Number(formData.get("totalSeats")),
            image: formData.get("image"),
            createdBy: {
                id: user?.id,
                name: user?.name,
                email: user?.email,
            },

            createdAt: new Date().toISOString(),
        };

        try {
            const res = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/events`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(eventData),
                }
            );

            const result = await res.json();

            if (result.success) {
                alert("Event Added Successfully");
                form.reset();
            } else {
                alert(result.message || "Something went wrong");
            }
        } catch (error) {
            console.error(error);
            alert("Failed to add event");
        }
    };

    return (
        <section className="min-h-screen py-12">
            <div className="mx-auto max-w-5xl px-4">
                <div className="rounded-2xl bg-background p-8 shadow-lg">
                    {/* Heading */}
                    <div className="mb-8 text-center">
                        <h1 className="text-3xl font-bold">
                            Add New Event
                        </h1>
                        <p className="mt-2 text-gray-400">
                            Create and publish your event for attendees.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* First Row */}
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                            {/* Title */}
                            <div>
                                <label className="mb-2 block font-medium">
                                    Event Title
                                </label>
                                <input
                                    name="title"
                                    type="text"
                                    required
                                    placeholder="Enter event title"
                                    className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-600"
                                />
                            </div>

                            {/* Category */}
                            <div>
                                <label className="mb-2 block font-medium">
                                    Category
                                </label>

                                <select
                                    name="category"
                                    required
                                    className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-600 bg-background">
                                    <option>Select Category</option>
                                    <option>Conference</option>
                                    <option>Workshop</option>
                                    <option>Seminar</option>
                                    <option>Concert</option>
                                    <option>Sports</option>
                                    <option>Technology</option>
                                    <option>Business</option>
                                    <option>Education</option>
                                    <option>Networking</option>
                                    <option>Festival</option>
                                </select>
                            </div>
                        </div>

                        {/* Second Row */}
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                            {/* Date */}
                            <div>
                                <label className="mb-2 block font-medium">
                                    Event Date
                                </label>

                                <input
                                    required
                                    name="date"
                                    type="date"
                                    className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-600"
                                />
                            </div>

                            {/* Time */}
                            <div>
                                <label className="mb-2 block font-medium">
                                    Event Time
                                </label>

                                <input
                                    required
                                    type="time"
                                    name="time"
                                    className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-600"
                                />
                            </div>
                        </div>

                        {/* Third Row */}
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                            {/* Location */}
                            <div>
                                <label className="mb-2 block font-medium">
                                    Location
                                </label>

                                <input
                                    required
                                    name="location"
                                    type="text"
                                    placeholder="Enter location"
                                    className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-600"
                                />
                            </div>

                            {/* Price */}
                            <div>
                                <label className="mb-2 block font-medium">
                                    Ticket Price ($)
                                </label>

                                <input
                                    name="price"
                                    required
                                    type="number"
                                    placeholder="Enter price"
                                    className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-600"
                                />
                            </div>
                        </div>

                        {/* Fourth Row */}
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                            {/* Seats */}
                            <div>
                                <label className="mb-2 block font-medium">
                                    Total Seats
                                </label>

                                <input
                                    required
                                    name="totalSeats"
                                    type="number"
                                    placeholder="Enter total seats"
                                    className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-600"
                                />
                            </div>

                            {/* Image */}
                            <div>
                                <label className="mb-2 block font-medium">
                                    Image URL (Optional)
                                </label>

                                <input
                                    required
                                    name="image"
                                    type="url"
                                    placeholder="https://example.com/image.jpg"
                                    className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-600"
                                />
                            </div>
                        </div>

                        {/* Short Description */}
                        <div>
                            <label className="mb-2 block font-medium">
                                Short Description
                            </label>

                            <textarea
                                name="shortDescription"
                                rows={3}
                                placeholder="Write a short description..."
                                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-600"
                            />
                        </div>

                        {/* Full Description */}
                        <div>
                            <label className="mb-2 block font-medium">
                                Full Description
                            </label>

                            <textarea
                                name="fullDescription"
                                rows={6}
                                placeholder="Write the complete event details..."
                                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-600"
                            />
                        </div>

                        {/* Submit */}
                        <button
                            type="submit"
                            className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700"
                        >
                            Publish Event
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default AddEventPage;