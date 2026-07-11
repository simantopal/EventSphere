import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="">
      <div className="mx-auto flex min-h-[60vh] max-w-7xl flex-col-reverse items-center justify-between gap-12 px-6 py-16 lg:flex-row">
        {/* Left */}
        <div className="max-w-xl items-center text-center md:text-left">
          <span className="rounded-full bg-indigo-100 px-4 py-2 text-sm font-medium text-indigo-600">
            🎉 Discover Amazing Events
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-tight text-slate-600 md:text-5xl lg:text-6xl">
            Find, Book & Experience
            <span className="text-indigo-600"> Unforgettable Events</span>
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Explore concerts, workshops, festivals, business conferences,
            sports, and community events—all in one place. Book your tickets
            securely and never miss an experience.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
            <Link
              href="/events"
              className="rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white transition hover:bg-indigo-700"
            >
              Explore Events
            </Link>

            <Link
              href="/events/add"
              className="rounded-xl border border-indigo-600 px-6 py-3 font-semibold text-indigo-600 transition hover:bg-indigo-50"
            >
              Host an Event
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-12 flex flex-wrap gap-8 justify-center md:justify-start">
            <div>
              <h3 className="text-2xl font-bold text-slate-700">500+</h3>
              <p className="text-sm text-slate-500">Events Hosted</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-slate-700">20K+</h3>
              <p className="text-sm text-slate-500">Happy Attendees</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-slate-700">100+</h3>
              <p className="text-sm text-slate-500">Trusted Organizers</p>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="relative w-full max-w-xl">
          <div className="absolute -left-8 top-10 h-32 w-32 rounded-full bg-indigo-200 blur-3xl"></div>

          <div className="absolute bottom-0 right-0 h-40 w-40 rounded-full bg-purple-200 blur-3xl"></div>

          <Image
            src="/Banner.png"
            alt="Event Hero"
            width={700}
            height={700}
            priority
            className="relative z-10 w-full"
          />
        </div>
      </div>
    </section>
  );
}