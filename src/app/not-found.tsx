"use client";

import Link from "next/link";

export default function NotFound() {
    return (
        <section className="flex min-h-screen items-center justify-center px-4">
            <div className="max-w-lg text-center">
                <h1 className="text-8xl font-extrabold text-blue-600">404</h1>

                <h2 className="mt-4 text-3xl font-bold">
                    Page Not Found
                </h2>

                <p className="mt-3 text-gray-500">
                    Sorry, the page you are looking for doesn`t exist or has been moved.
                </p>

                <div className="mt-8 flex justify-center gap-4">
                    <Link
                        href="/"
                        className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
                    >
                        Back to Home
                    </Link>

                    <Link
                        href="/explore-events"
                        className="rounded-lg border border-blue-600 px-6 py-3 font-medium text-blue-600 transition hover:bg-blue-50"
                    >
                        Explore Events
                    </Link>
                </div>
            </div>
        </section>
    );
}