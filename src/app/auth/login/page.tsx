"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { signIn } from "@/lib/auth-client";

export default function LoginPage() {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    setLoading(true);

    try {
      const { error } = await signIn.email({
        email,
        password,
        callbackURL: "/",
      });

      if (error) {
        alert(error.message);
        return;
      }

      router.push("/");
      router.refresh();
    } catch (err) {
      console.error(err);
      alert("Login failed!");
    } finally {
      setLoading(false);
    }
  };

  const handleDemoLogin = async () => {
    setLoading(true);

    try {
      const { error } = await signIn.email({
        email: "user@123.com",
        password: "user@123",
        callbackURL: "/",
      });

      if (error) {
        alert(error.message);
        return;
      }

      router.push("/");
      router.refresh();
    } catch (err) {
      console.error(err);
      alert("Demo login failed!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="flex min-h-screen items-center justify-center px-4 py-12">
      <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-background p-8 shadow-lg">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold">
            Welcome Back
          </h1>

          <p className="mt-2 text-slate-400">
            Sign in to continue to{" "}
            <span className="font-semibold">EventSphere</span>.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="mb-2 block text-sm font-medium">
              Email
            </label>

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-indigo-600"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              Password
            </label>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter your password"
                required
                className="w-full rounded-lg border border-slate-300 px-4 py-3 pr-16 outline-none transition focus:border-indigo-600"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-medium text-indigo-600"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          <div className="text-right">
            <Link
              href="/forgot-password"
              className="text-sm text-indigo-600 hover:underline"
            >
              Forgot Password?
            </Link>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-indigo-600 py-3 font-semibold text-white transition hover:bg-indigo-700 disabled:opacity-60"
          >
            {loading ? "Logging in..." : "Login"}
          </button>

          <button
            type="button"
            onClick={handleDemoLogin}
            disabled={loading}
            className="w-full rounded-lg border border-indigo-600 py-3 font-semibold text-indigo-600 transition hover:bg-indigo-50 disabled:opacity-60"
          >
            Demo Login
          </button>
        </form>

        <p className="mt-8 text-center text-sm text-slate-600">
          Don`t have an account?{" "}
          <Link
            href="/auth/register"
            className="font-semibold text-indigo-600 hover:underline"
          >
            Register
          </Link>
        </p>
      </div>
    </section>
  );
}