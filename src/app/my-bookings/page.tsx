"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useSession } from "@/lib/auth-client";
import { Button, Chip, Table } from "@heroui/react";
import { useRouter } from "next/navigation";
import Image from "next/image";

interface Booking {
    _id: string;
    eventId: string;
    eventTitle: string;
    eventImage: string;
    date: string;
    location: string;
    price: number;
    tickets: number;
    totalPrice: number;
    status: "Pending" | "Confirmed" | "Cancelled";
}

const MyBookingPage = () => {
    const router = useRouter();
    const { data: session, isPending } = useSession();

    const userEmail = session?.user?.email;

    const [bookings, setBookings] = useState<Booking[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!isPending && !session) {
            router.replace("/auth/login");
            return;
        }
        if (isPending || !userEmail) return;

        const fetchBookings = async () => {
            setLoading(true);

            try {
                const res = await fetch(
                    `${process.env.NEXT_PUBLIC_API_URL}/bookings?email=${userEmail}`,
                    {
                        cache: "no-store",
                    }
                );

                const result = await res.json();

                if (result.success) {
                    setBookings(result.data);
                } else {
                    setBookings([]);
                }
            } catch (error) {
                console.error(error);
                setBookings([]);
            } finally {
                setLoading(false);
            }
        };

        fetchBookings();
    }, [session, userEmail, isPending, router]);

    const handleDelete = async (id: string) => {
        const confirmDelete = window.confirm(
            "Are you sure you want to cancel this booking?"
        );

        if (!confirmDelete) return;

        try {
            const res = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/bookings/${id}`,
                {
                    method: "DELETE",
                }
            );

            const result = await res.json();

            if (result.success) {
                setBookings((prev) => prev.filter((booking) => booking._id !== id));
            }
        } catch (error) {
            console.error(error);
        }
    };

    if (isPending || loading) {
        return (
            <section className="mx-auto max-w-7xl px-4 py-10">
                <h2 className="text-center text-2xl font-semibold">Loading...</h2>
            </section>
        );
    }
    if (!session) return null;

    return (
        <section className="container mx-auto px-4 py-10">
            <div className="mb-8 flex items-center justify-between">
                <div>
                    <h1 className="text-4xl font-bold">My Bookings</h1>
                    <p className="text-default-500 mt-2">
                        View and manage all your booked events.
                    </p>
                </div>

                <Chip className="bg-blue-500" variant="soft">
                    {bookings.length} Bookings
                </Chip>
            </div>

            <Table>
                <Table.ScrollContainer>
                    <Table.Content aria-label="My Bookings" className="min-w-275">
                        <Table.Header>
                            <Table.Column isRowHeader>Event</Table.Column>
                            <Table.Column>Date</Table.Column>
                            <Table.Column>Location</Table.Column>
                            <Table.Column>Tickets</Table.Column>
                            <Table.Column>Total</Table.Column>
                            <Table.Column>Status</Table.Column>
                            <Table.Column>Action</Table.Column>
                        </Table.Header>

                        <Table.Body>
                            {bookings.length === 0 ? (
                                <Table.Row>
                                    <Table.Cell>No bookings found</Table.Cell>
                                    <Table.Cell></Table.Cell>
                                    <Table.Cell></Table.Cell>
                                    <Table.Cell></Table.Cell>
                                    <Table.Cell></Table.Cell>
                                    <Table.Cell></Table.Cell>
                                    <Table.Cell></Table.Cell>
                                </Table.Row>
                            ) : (
                                bookings.map((booking) => (
                                    <Table.Row key={booking._id}>
                                        <Table.Cell>
                                            <div className="flex items-center gap-3">
                                                <Image
                                                    src={booking.eventImage}
                                                    alt={booking.eventTitle}
                                                    width={500}
                                                    height={500}
                                                    className="h-14 w-14 rounded-lg object-cover"
                                                />

                                                <div>
                                                    <p className="font-semibold">
                                                        {booking.eventTitle}
                                                    </p>
                                                </div>
                                            </div>
                                        </Table.Cell>

                                        <Table.Cell>{booking.date}</Table.Cell>

                                        <Table.Cell>{booking.location}</Table.Cell>

                                        <Table.Cell>{booking.tickets}</Table.Cell>

                                        <Table.Cell>${booking.totalPrice}</Table.Cell>

                                        <Table.Cell>
                                            <Chip
                                                size="sm"
                                                color={
                                                    booking.status === "Confirmed"
                                                        ? "success"
                                                        : booking.status === "Pending"
                                                            ? "warning"
                                                            : "danger"
                                                }
                                                variant="soft"
                                            >
                                                {booking.status}
                                            </Chip>
                                        </Table.Cell>

                                        <Table.Cell>
                                            <div className="flex gap-2">
                                                <Link href={`/explore-events/${booking.eventId}`}>
                                                    <Button size="sm" className="bg-blue-500">
                                                        View
                                                    </Button>
                                                </Link>

                                                <Button
                                                    size="sm"
                                                    variant="danger"
                                                    className="bg-red-500"
                                                    onPress={() => handleDelete(booking._id)}
                                                >
                                                    Delete
                                                </Button>
                                            </div>
                                        </Table.Cell>
                                    </Table.Row>
                                ))
                            )}
                        </Table.Body>
                    </Table.Content>
                </Table.ScrollContainer>
            </Table>
        </section>
    );
};

export default MyBookingPage;