import Link from "next/link";
import { Mail, MapPin, Phone, Sparkles } from "lucide-react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-10 text-center md:grid-cols-2 md:text-left lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="flex items-center justify-center gap-2 text-3xl font-bold text-indigo-500 md:justify-start"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-600 text-white">
                <Sparkles size={18} />
              </span>

              Orvanta
            </Link>

            <p className="mt-4 text-sm leading-7 text-slate-400">
              Orvanta is an intelligent shopping platform that helps you
              discover better products, make smarter decisions, and enjoy a
              personalized shopping experience powered by AI.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">
              Explore
            </h3>

            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="transition hover:text-indigo-400"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/explore-shop"
                  className="transition hover:text-indigo-400"
                >
                  Explore Shop
                </Link>
              </li>

              <li>
                <Link
                  href="/ai-assistant"
                  className="transition hover:text-indigo-400"
                >
                  AI Shopping Assistant
                </Link>
              </li>

              <li>
                <Link
                  href="/about"
                  className="transition hover:text-indigo-400"
                >
                  About Orvanta
                </Link>
              </li>

              <li>
                <Link
                  href="/blog"
                  className="transition hover:text-indigo-400"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">
              Support
            </h3>

            <ul className="space-y-3">
              <li>
                <Link
                  href="/privacy"
                  className="transition hover:text-indigo-400"
                >
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link
                  href="/terms"
                  className="transition hover:text-indigo-400"
                >
                  Terms & Conditions
                </Link>
              </li>

              <li>
                <Link
                  href="/faq"
                  className="transition hover:text-indigo-400"
                >
                  Frequently Asked Questions
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="transition hover:text-indigo-400"
                >
                  Help Center
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">
              Contact Us
            </h3>

            <div className="space-y-4 text-sm">
              <div className="flex items-center justify-center gap-3 md:justify-start">
                <MapPin size={18} className="text-indigo-400" />
                <p>Dhaka, Bangladesh</p>
              </div>

              <div className="flex items-center justify-center gap-3 md:justify-start">
                <Phone size={18} className="text-indigo-400" />
                <p>+880 1234-567890</p>
              </div>

              <div className="flex items-center justify-center gap-3 md:justify-start">
                <Mail size={18} className="text-indigo-400" />
                <p>support@orvanta.com</p>
              </div>

              {/* Social Links */}
              <div className="mt-5 flex justify-center gap-4 md:justify-start">
                <Link
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="transition hover:text-indigo-400"
                >
                  <FaFacebook size={18} />
                </Link>

                <Link
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                  className="transition hover:text-indigo-400"
                >
                  <FaTwitter size={18} />
                </Link>

                <Link
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="transition hover:text-indigo-400"
                >
                  <FaInstagram size={18} />
                </Link>

                <Link
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="transition hover:text-indigo-400"
                >
                  <FaLinkedin size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-slate-700 pt-6 text-center text-sm text-slate-400">
          © {new Date().getFullYear()} Orvanta. All rights reserved.
        </div>
      </div>
    </footer>
  );
}