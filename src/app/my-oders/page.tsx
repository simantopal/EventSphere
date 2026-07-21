"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useSession } from "@/lib/auth-client";
import { Button, Chip, Table } from "@heroui/react";
import { useRouter } from "next/navigation";
import Image from "next/image";

interface Order {
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

const MyOrdersPage = () => {
    const router = useRouter();

    const {
        data: session,
        isPending,
    } = useSession();

    const userEmail = session?.user?.email;

    const [orders, setOrders] = useState<Order[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!isPending && !session) {
            router.replace("/auth/login");
            return;
        }

        if (isPending || !userEmail) {
            return;
        }

        const fetchOrders = async () => {
            setLoading(true);

            try {
                const res = await fetch(
                    `${process.env.NEXT_PUBLIC_API_URL}/bookings?email=${encodeURIComponent(
                        userEmail
                    )}`,
                    {
                        cache: "no-store",
                    }
                );

                const result = await res.json();

                if (result.success) {
                    setOrders(result.data);
                } else {
                    setOrders([]);
                }
            } catch (error) {
                console.error(
                    "Failed to fetch orders:",
                    error
                );

                setOrders([]);
            } finally {
                setLoading(false);
            }
        };

        fetchOrders();
    }, [
        session,
        userEmail,
        isPending,
        router,
    ]);

    const handleCancelOrder = async (
        id: string
    ) => {
        const confirmCancel =
            window.confirm(
                "Are you sure you want to cancel this order?"
            );

        if (!confirmCancel) {
            return;
        }

        try {
            const res = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/bookings/${id}`,
                {
                    method: "DELETE",
                }
            );

            const result = await res.json();

            if (result.success) {
                setOrders((prev) =>
                    prev.filter(
                        (order) =>
                            order._id !== id
                    )
                );
            }
        } catch (error) {
            console.error(
                "Failed to cancel order:",
                error
            );
        }
    };

    if (isPending || loading) {
        return (
            <section className="mx-auto max-w-7xl px-4 py-10">
                <div className="flex min-h-[300px] items-center justify-center">
                    <h2 className="text-2xl font-semibold">
                        Loading orders...
                    </h2>
                </div>
            </section>
        );
    }

    if (!session) {
        return null;
    }

    return (
        <section className="container mx-auto px-4 py-10">

            {/* Header */}
            <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">

                <div>
                    <h1 className="text-4xl font-bold">
                        My Orders
                    </h1>

                    <p className="mt-2 text-default-500">
                        View and manage all your orders.
                    </p>
                </div>

                <Chip
                    className="w-fit bg-blue-500 text-white"
                    variant="soft"
                >
                    {orders.length} Orders
                </Chip>

            </div>

            {/* Orders Table */}
            <div className="overflow-hidden rounded-2xl border border-default-200">

                <Table>

                    <Table.ScrollContainer>

                        <Table.Content
                            aria-label="My Orders"
                            className="min-w-275"
                        >

                            <Table.Header>

                                <Table.Column isRowHeader>
                                    Product
                                </Table.Column>

                                <Table.Column>
                                    Date
                                </Table.Column>

                                <Table.Column>
                                    Location
                                </Table.Column>

                                <Table.Column>
                                    Quantity
                                </Table.Column>

                                <Table.Column>
                                    Total
                                </Table.Column>

                                <Table.Column>
                                    Status
                                </Table.Column>

                                <Table.Column>
                                    Action
                                </Table.Column>

                            </Table.Header>

                            <Table.Body>

                                {orders.length === 0 ? (

                                    <Table.Row>

                                        <Table.Cell>
                                            No orders found
                                        </Table.Cell>

                                        <Table.Cell>
                                            -
                                        </Table.Cell>

                                        <Table.Cell>
                                            -
                                        </Table.Cell>

                                        <Table.Cell>
                                            -
                                        </Table.Cell>

                                        <Table.Cell>
                                            -
                                        </Table.Cell>

                                        <Table.Cell>
                                            -
                                        </Table.Cell>

                                        <Table.Cell>
                                            -
                                        </Table.Cell>

                                    </Table.Row>

                                ) : (

                                    orders.map(
                                        (order) => (

                                            <Table.Row
                                                key={
                                                    order._id
                                                }
                                            >

                                                {/* Product */}
                                                <Table.Cell>

                                                    <div className="flex items-center gap-3">

                                                        <Image
                                                            src={
                                                                order.eventImage
                                                            }
                                                            alt={
                                                                order.eventTitle
                                                            }
                                                            width={
                                                                500
                                                            }
                                                            height={
                                                                500
                                                            }
                                                            className="h-14 w-14 rounded-lg object-cover"
                                                        />

                                                        <div>

                                                            <p className="font-semibold">
                                                                {
                                                                    order.eventTitle
                                                                }
                                                            </p>

                                                            <p className="text-xs text-default-500">
                                                                $
                                                                {
                                                                    order.price
                                                                }{" "}
                                                                per ticket
                                                            </p>

                                                        </div>

                                                    </div>

                                                </Table.Cell>

                                                {/* Date */}
                                                <Table.Cell>
                                                    {
                                                        order.date
                                                    }
                                                </Table.Cell>

                                                {/* Location */}
                                                <Table.Cell>
                                                    {
                                                        order.location
                                                    }
                                                </Table.Cell>

                                                {/* Quantity */}
                                                <Table.Cell>
                                                    {
                                                        order.tickets
                                                    }
                                                </Table.Cell>

                                                {/* Total */}
                                                <Table.Cell>

                                                    <span className="font-semibold">
                                                        $
                                                        {
                                                            order.totalPrice
                                                        }
                                                    </span>

                                                </Table.Cell>

                                                {/* Status */}
                                                <Table.Cell>

                                                    <Chip
                                                        size="sm"
                                                        color={
                                                            order.status ===
                                                            "Confirmed"
                                                                ? "success"
                                                                : order.status ===
                                                                  "Pending"
                                                                    ? "warning"
                                                                    : "danger"
                                                        }
                                                        variant="soft"
                                                    >
                                                        {
                                                            order.status
                                                        }
                                                    </Chip>

                                                </Table.Cell>

                                                {/* Action */}
                                                <Table.Cell>

                                                    <div className="flex gap-2">

                                                        <Link
                                                            href={`/explore-events/${order.eventId}`}
                                                        >

                                                            <Button
                                                                size="sm"
                                                                className="bg-blue-500 text-white"
                                                            >
                                                                View
                                                            </Button>

                                                        </Link>

                                                        {order.status !==
                                                            "Cancelled" && (

                                                            <Button
                                                                size="sm"
                                                                className="bg-red-500 text-white"
                                                                onPress={() =>
                                                                    handleCancelOrder(
                                                                        order._id
                                                                    )
                                                                }
                                                            >
                                                                Cancel
                                                            </Button>

                                                        )}

                                                    </div>

                                                </Table.Cell>

                                            </Table.Row>

                                        )
                                    )

                                )}

                            </Table.Body>

                        </Table.Content>

                    </Table.ScrollContainer>

                </Table>

            </div>

        </section>
    );
};

export default MyOrdersPage;