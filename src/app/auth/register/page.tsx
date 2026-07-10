"use client";

import Link from "next/link";
import { useState } from "react";

export default function RegisterPage() {
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;

        const formData = new FormData(form);

        const name = formData.get("name") as string;
        const email = formData.get("email") as string;
        const password = formData.get("password") as string;
        const confirmPassword = formData.get("confirmPassword") as string;

        console.log({
            name,
            email,
            password,
            confirmPassword,
        });
    };

    return (
        <section className="min-h-screen flex items-center justify-center bg-slate-100 px-4 py-5">
            <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">
                <div className="mb-5 text-center">
                    <Link href="/" className="text-3xl font-bold text-blue-600">
                        EventSphere
                    </Link>

                    <h1 className="mt- text-2xl font-bold">
                        Create Your Account
                    </h1>
                </div>

                <form onSubmit={handleSubmit} className="space-y-2">
                    {/* Name */}
                    <div>
                        <label className="mb-2 block font-medium">
                            Full Name
                        </label>

                        <input
                            type="text"
                            name="name"
                            placeholder="John Doe"
                            required
                            className="w-full rounded-lg border px-4 py-3 outline-none focus:border-blue-600"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="mb-2 block font-medium">
                            Email
                        </label>

                        <input
                            type="email"
                            name="email"
                            placeholder="john@example.com"
                            required
                            className="w-full rounded-lg border px-4 py-3 outline-none focus:border-blue-600"
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label className="mb-2 block font-medium">
                            Password
                        </label>

                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                placeholder="Enter password"
                                required
                                className="w-full rounded-lg border px-4 py-3 pr-16 outline-none focus:border-blue-600"
                            />

                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-blue-600"
                            >
                                {showPassword ? "Hide" : "Show"}
                            </button>
                        </div>
                    </div>

                    {/* Confirm Password */}
                    <div>
                        <label className="mb-2 block font-medium">
                            Confirm Password
                        </label>

                        <input
                            type="password"
                            name="confirmPassword"
                            placeholder="Confirm password"
                            required
                            className="w-full rounded-lg border px-4 py-3 outline-none focus:border-blue-600"
                        />
                    </div>

                    {/* Terms */}
                    <div className="flex items-center gap-2">
                        <input type="checkbox" required />

                        <p className="text-sm text-gray-600">
                            I agree to the Terms & Conditions.
                        </p>
                    </div>

                    {/* Register Button */}
                    <button
                        type="submit"
                        className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700"
                    >
                        Create Account
                    </button>

                    {/* Google Button */}
                    <button
                        type="button"
                        className="w-full rounded-lg border py-3 font-medium hover:bg-gray-100"
                    >
                        Continue with Google
                    </button>
                </form>

                <p className="mt-6 text-center text-sm">
                    Already have an account?{" "}
                    <Link
                        href="/auth/login"
                        className="font-semibold text-blue-600 hover:underline"
                    >
                        LogIn
                    </Link>
                </p>
            </div>
        </section>
    );
}