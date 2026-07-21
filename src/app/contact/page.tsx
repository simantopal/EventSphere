import Link from "next/link";
import FAQ from "@/components/home/FAQ";
import {
  FaEnvelope,
  FaLocationDot,
  FaPhone,
  FaClock,
} from "react-icons/fa6";

export default function ContactPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-primary py-24 text-primary-foreground">
        <div className="mx-auto flex items-center justify-center px-6">
          <div className="max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
              How Can We Help?
            </h1>

            <p className="mt-6 text-lg leading-8 text-primary-foreground/80">
              Have a question about a product, your order, or Orvanta`s AI
              shopping experience? Our support team is here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-20 lg:grid-cols-2">
        {/* Left */}
        <div>
          <h2 className="text-3xl font-bold">
            Get In Touch
          </h2>

          <p className="mt-5 leading-8 text-base-content/70">
            Whether you need help finding the right product, have a question
            about an order, or want to learn more about our AI-powered shopping
            experience, our team is ready to help.
          </p>

          <div className="mt-10 space-y-6">
            {/* Office */}
            <div className="flex items-start gap-4">
              <div className="btn btn-circle btn-primary btn-sm">
                <FaLocationDot />
              </div>

              <div>
                <h4 className="font-semibold">
                  Office
                </h4>

                <p className="text-base-content/70">
                  Dhaka, Bangladesh
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="btn btn-circle btn-primary btn-sm">
                <FaEnvelope />
              </div>

              <div>
                <h4 className="font-semibold">
                  Email
                </h4>

                <p className="text-base-content/70">
                  support@orvanta.com
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <div className="btn btn-circle btn-primary btn-sm">
                <FaPhone />
              </div>

              <div>
                <h4 className="font-semibold">
                  Phone
                </h4>

                <p className="text-base-content/70">
                  +880 1700-000000
                </p>
              </div>
            </div>

            {/* Working Hours */}
            <div className="flex items-start gap-4">
              <div className="btn btn-circle btn-primary btn-sm">
                <FaClock />
              </div>

              <div>
                <h4 className="font-semibold">
                  Working Hours
                </h4>

                <p className="text-base-content/70">
                  Sunday - Thursday
                  <br />
                  9:00 AM - 6:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="card border border-base-300 bg-base-100 shadow-lg">
          <div className="card-body">
            <h2 className="card-title mb-4 text-2xl">
              Send Us a Message
            </h2>

            <form className="space-y-5">
              <input
                type="text"
                placeholder="Your Name"
                className="input input-bordered w-full"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="input input-bordered w-full"
              />

              <input
                type="text"
                placeholder="How can we help?"
                className="input input-bordered w-full"
              />

              <textarea
                rows={6}
                placeholder="Write your message..."
                className="textarea textarea-bordered w-full"
              />

              <button
                type="submit"
                className="btn btn-primary w-full"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <FAQ />
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-5 text-center">
          <h2 className="text-4xl font-bold">
            Need Help Finding the Right Product?
          </h2>

          <p className="mt-5 text-base-content/70">
            Explore thousands of products or let Orvanta`s intelligent AI
            assistant help you find what fits your needs.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/explore-shop"
              className="rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white transition hover:bg-indigo-700"
            >
              Explore Products
            </Link>

            <Link
              href="/ai-assistant"
              className="rounded-xl border border-indigo-600 px-6 py-3 font-semibold text-indigo-600 transition hover:bg-indigo-600 hover:text-white"
            >
              Ask AI Assistant
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}