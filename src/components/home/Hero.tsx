import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto flex min-h-[65vh] max-w-7xl flex-col-reverse items-center justify-between gap-12 px-6 py-16 lg:flex-row lg:py-20">
        {/* Left Content */}
        <div className="max-w-2xl text-center md:text-left">
          <span className="inline-flex items-center rounded-full bg-indigo-100 px-4 py-2 text-sm font-semibold text-indigo-600">
            ✦ Meet Your Intelligent Event Agent
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-slate-800 md:text-5xl lg:text-6xl">
            Turn Your Ideas Into
            <span className="block text-indigo-600">
              Extraordinary Experiences
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
            Orvanta uses intelligent AI agents to help you plan better events,
            discover experiences that match your interests, and make smarter
            decisions—all in one powerful platform.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-wrap justify-center gap-4 md:justify-start">
            <Link
              href="/explore-shop"
              className="rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white shadow-lg shadow-indigo-200 transition hover:bg-indigo-700"
            >
              Explore Shop
            </Link>

            <Link
              href="/shop/add-items"
              className="rounded-xl border border-indigo-600 px-6 py-3 font-semibold text-indigo-600 transition hover:bg-indigo-50"
            >
              Host an Orvanta
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-12 flex flex-wrap justify-center gap-8 md:justify-start">
            <div>
              <h3 className="text-2xl font-bold text-slate-800">10K+</h3>
              <p className="text-sm text-slate-500">Experiences Discovered</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-slate-800">5K+</h3>
              <p className="text-sm text-slate-500">AI Plans Created</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-slate-800">98%</h3>
              <p className="text-sm text-slate-500">User Satisfaction</p>
            </div>
          </div>
        </div>

        {/* Right Visual */}
        <div className="relative w-full max-w-xl">
          {/* Background Glow */}
          <div className="absolute -left-8 top-10 h-40 w-40 rounded-full bg-indigo-200 blur-3xl" />

          <div className="absolute bottom-0 right-0 h-48 w-48 rounded-full bg-purple-200 blur-3xl" />

          {/* AI Assistant Card */}
          <div className="absolute left-0  z-20 hidden -translate-y-1/2 rounded-2xl border border-white/60 bg-white/90 p-4 shadow-xl backdrop-blur-md sm:block">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-100 text-xl">
                ✦
              </div>

              <div>
                <p className="text-sm font-bold text-slate-800">
                  Orvanta AI
                </p>

                <p className="text-xs text-slate-500">
                  Planning your next experience...
                </p>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <Image
            src="/Hero.jpeg"
            alt="Orvanta AI-powered event planning platform"
            width={700}
            height={700}
            priority
            className="relative z-10 w-full object-contain rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
}