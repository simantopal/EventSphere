import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link href="/" className="text-3xl font-bold text-indigo-500">
              EventSphere
            </Link>

            <p className="mt-4 text-sm leading-7 text-slate-400">
              EventSphere helps you discover, explore, and book exciting events
              with a smooth and secure experience.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">
              Quick Links
            </h3>

            <ul className="space-y-3">
              <li>
                <Link href="/" className="hover:text-indigo-400">
                  Home
                </Link>
              </li>

              <li>
                <Link href="/events" className="hover:text-indigo-400">
                  Explore Events
                </Link>
              </li>

              <li>
                <Link href="/about" className="hover:text-indigo-400">
                  About
                </Link>
              </li>

              <li>
                <Link href="/contact" className="hover:text-indigo-400">
                  Contact
                </Link>
              </li>

              <li>
                <Link href="/blog" className="hover:text-indigo-400">
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
                <Link href="/privacy" className="hover:text-indigo-400">
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link href="/terms" className="hover:text-indigo-400">
                  Terms & Conditions
                </Link>
              </li>

              <li>
                <Link href="/faq" className="hover:text-indigo-400">
                  FAQ
                </Link>
              </li>

              <li>
                <Link href="/contact" className="hover:text-indigo-400">
                  Help Center
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">
              Contact
            </h3>

            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <MapPin size={18} />
                <p>Dhaka, Bangladesh</p>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={18} />
                <p>+880 1234-567890</p>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={18} />
                <p>support@eventsphere.com</p>
              </div>

              <div className="mt-5 flex gap-4">
                <Link
                  href="https://facebook.com"
                  target="_blank"
                  className="hover:text-indigo-400"
                >
                  <FaFacebook />
                </Link>

                <Link
                  href="https://twitter.com"
                  target="_blank"
                  className="hover:text-indigo-400"
                >
                  <FaTwitter />
                </Link>

                <Link
                  href="https://instagram.com"
                  target="_blank"
                  className="hover:text-indigo-400"
                >
                  <FaInstagram />
                </Link>

                <Link
                  href="https://linkedin.com"
                  target="_blank"
                  className="hover:text-indigo-400"
                >
                  <FaLinkedin />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-slate-700 pt-6 text-center text-sm text-slate-400">
          © {new Date().getFullYear()} EventSphere. All rights reserved.
        </div>
      </div>
    </footer>
  );
}