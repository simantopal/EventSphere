"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, Sparkles, X } from "lucide-react";

import ThemeToggle from "./ThemeToggle";
import { signOut, useSession } from "@/lib/auth-client";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const { data: session, isPending } = useSession();

  if (isPending) {
    return null;
  }

  const isLoggedIn = !!session;

  const publicLinks = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/explore-shop" },
    { name: "AI Assistant", href: "/ai-assistant" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const privateLinks = [
    { name: "Add Product", href: "/shop/add-items" },
    { name: "Manage Products", href: "/shop/manage" },
  ];

  const links = isLoggedIn
    ? [...publicLinks, ...privateLinks]
    : publicLinks;

  const handleLogout = async () => {
    await signOut();
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-background/95 shadow-sm backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 text-2xl font-bold tracking-tight text-indigo-600"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-md">
            <Sparkles size={19} />
          </span>

          <span>Orvanta</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-7 md:flex">
          {links.map((link) => {
            const isActive =
              pathname === link.href ||
              (link.href !== "/" && pathname.startsWith(link.href));

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm transition ${
                  isActive
                    ? "font-semibold text-indigo-600"
                    : "text-slate-600 hover:text-indigo-600"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Actions */}
        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />

          {isLoggedIn ? (
            <>
              <Image
                src={session?.user.image || "/avatar.png"}
                alt="User profile"
                width={40}
                height={40}
                className="h-10 w-10 rounded-full object-cover ring-2 ring-indigo-100"
              />

              <button
                onClick={handleLogout}
                className="rounded-lg bg-red-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-700"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                href="/auth/login"
                className="rounded-lg border border-indigo-600 px-4 py-2 text-sm font-semibold text-indigo-600 transition hover:bg-indigo-50"
              >
                Login
              </Link>

              <Link
                href="/auth/register"
                className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-indigo-700"
              >
                Get Started
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-lg p-2 transition hover:bg-slate-100 md:hidden"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="border-t border-slate-200/70 bg-background px-6 py-5 md:hidden">
          <div className="space-y-4 text-center">
            {links.map((link) => {
              const isActive =
                pathname === link.href ||
                (link.href !== "/" && pathname.startsWith(link.href));

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block transition ${
                    isActive
                      ? "font-semibold text-indigo-600"
                      : "text-slate-600 hover:text-indigo-600"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          <hr className="my-5" />

          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="w-full rounded-lg bg-red-500 py-2.5 font-semibold text-white"
            >
              Logout
            </button>
          ) : (
            <div className="space-y-3">
              <Link
                href="/auth/login"
                onClick={() => setIsOpen(false)}
                className="block rounded-lg border border-indigo-600 py-2.5 text-center font-semibold text-indigo-600"
              >
                Login
              </Link>

              <Link
                href="/auth/register"
                onClick={() => setIsOpen(false)}
                className="block rounded-lg bg-indigo-600 py-2.5 text-center font-semibold text-white"
              >
                Get Started
              </Link>
            </div>
          )}
        </div>
      )}
    </header>
  );
}