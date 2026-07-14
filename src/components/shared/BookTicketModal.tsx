"use client";

import { useState } from "react";
import { useSession } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

interface Props {
    event: {
        _id: string;
        title: string;
        price: number;
    };
}

const BookTicketModal = ({ event }: Props) => {
    const [open, setOpen] = useState(false);

    const router = useRouter();

    const { data: session } = useSession();

    const user = session?.user;

    const handleOpen = () => {
        if (!user) {
            router.push(`/auth/login?redirect=/events/${event._id}`);
            return;
        }

        setOpen(true);
    };

    const handleBooking = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const form = e.currentTarget;

        const formData = new FormData(form);

        const bookingData = {
            eventId: event._id,
            eventName: event.title,
            price: event.price,

            name: user?.name,
            email: user?.email,

            tickets: Number(formData.get("tickets")),
        };

        const res = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/bookings`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(bookingData),
            }
        );

        const data = await res.json();

        if (data.success) {
            alert("Ticket booked successfully");
            setOpen(false);
            form.reset();
        }
    };

    return (
        <>
            <button
                onClick={handleOpen}
                className="mt-8 w-fit rounded-lg bg-indigo-600 px-8 py-3 text-white"
            >
                Book Ticket
            </button>

            {open && (
                <form
                    onSubmit={handleBooking}
                    className="fixed inset-0 z-50 m-auto h-fit w-full max-w-md rounded-xl bg-background p-6"
                >
                    <h2 className="text-2xl font-bold">
                        Book {event.title}
                    </h2>

                    <input
                        value={user?.name || ""}
                        readOnly
                        className="mt-4 w-full rounded border p-3"
                    />

                    <input
                        value={user?.email || ""}
                        readOnly
                        className="mt-4 w-full rounded border p-3"
                    />

                    <input
                        name="tickets"
                        type="number"
                        min={1}
                        placeholder="Number of Tickets"
                        className="mt-4 w-full rounded border p-3"
                        required
                    />

                    <div className="mt-5 flex gap-3">
                        <button
                            type="button"
                            onClick={() => setOpen(false)}
                            className="rounded border px-5 py-2"
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            className="rounded bg-indigo-600 px-5 py-2 text-white"
                        >
                            Confirm
                        </button>
                    </div>
                </form>
            )}
        </>
    );
};

export default BookTicketModal;