"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // Change to your auth state later
  const isLoggedIn = false;

  const publicLinks = [
    { name: "Home", href: "/" },
    { name: "Explore", href: "/events" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const privateLinks = [
    { name: "Add Event", href: "/events/add" },
    { name: "Manage Events", href: "/events/manage" },
    { name: "My Bookings", href: "/my-bookings" },
    { name: "Profile", href: "/profile" },
  ];

  const links = isLoggedIn
    ? [...publicLinks, ...privateLinks]
    : publicLinks;

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold text-indigo-600"
        >
          EventSphere
        </Link>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`transition ${
                pathname === link.href
                  ? "font-semibold text-indigo-600"
                  : "text-gray-700 hover:text-indigo-600"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Right Side */}
        <div className="hidden items-center gap-3 md:flex">
          {isLoggedIn ? (
            <>
              <img
                src="https://i.pravatar.cc/40"
                alt="User"
                className="h-10 w-10 rounded-full"
              />

              <button className="rounded-lg bg-red-500 px-4 py-2 text-white transition hover:bg-red-600">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                href="/auth/login"
                className="rounded-lg border border-indigo-600 px-4 py-2 text-indigo-600 transition hover:bg-indigo-50"
              >
                Login
              </Link>

              <Link
                href="/auth/register"
                className="rounded-lg bg-indigo-600 px-4 py-2 text-white transition hover:bg-indigo-700"
              >
                Register
              </Link>
            </>
          )}
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="space-y-4 border-t bg-white px-6 py-5 md:hidden">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`block ${
                pathname === link.href
                  ? "font-semibold text-indigo-600"
                  : "text-gray-700"
              }`}
            >
              {link.name}
            </Link>
          ))}

          <hr />

          {isLoggedIn ? (
            <button className="w-full rounded-lg bg-red-500 py-2 text-white">
              Logout
            </button>
          ) : (
            <div className="space-y-3">
              <Link
                href="/login"
                className="block rounded-lg border border-indigo-600 py-2 text-center text-indigo-600"
              >
                Login
              </Link>

              <Link
                href="/register"
                className="block rounded-lg bg-indigo-600 py-2 text-center text-white"
              >
                Register
              </Link>
            </div>
          )}
        </div>
      )}
    </header>
  );
}