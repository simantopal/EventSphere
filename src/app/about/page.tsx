import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  const features = [
    {
      title: "AI-Powered Shopping",
      description:
        "Get intelligent product suggestions based on your needs, preferences, budget, and shopping behavior.",
      icon: "🤖",
    },
    {
      title: "Personalized Recommendations",
      description:
        "Discover products that match your interests with recommendations that become smarter over time.",
      icon: "✨",
    },
    {
      title: "Smarter Decisions",
      description:
        "Compare products, understand key features, and make confident purchase decisions with AI assistance.",
      icon: "🧠",
    },
    {
      title: "Simple & Secure",
      description:
        "Enjoy a smooth, secure, and responsive shopping experience across every device.",
      icon: "🔒",
    },
  ];

  const team = [
    {
      name: "Alex Morgan",
      role: "Founder & Product Strategist",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500",
    },
    {
      name: "Maya Carter",
      role: "AI & Technology Lead",
      image:
        "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=500",
    },
    {
      name: "Daniel Wilson",
      role: "Customer Experience Lead",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500",
    },
  ];

  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 text-center">
          <h1 className="text-4xl font-bold md:text-6xl">
            About Orvanta
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-100">
            Orvanta is an intelligent e-commerce platform designed to make
            online shopping more personal, more informed, and more effortless
            through the power of Agentic AI.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="mb-6 text-3xl font-bold">
              Shopping, Reimagined with Intelligence
            </h2>

            <p className="mb-4 leading-8 text-slate-600">
              Online shopping often means endless scrolling, confusing choices,
              and spending hours comparing products. Orvanta was created to
              make that experience simpler.
            </p>

            <p className="leading-8 text-slate-600">
              Our intelligent shopping platform understands what users are
              looking for and helps them discover relevant products, compare
              options, and make better decisions with the support of AI.
            </p>
          </div>

          <Image
            src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1000"
            alt="Modern online shopping experience"
            width={700}
            height={500}
            className="h-[420px] w-full rounded-2xl object-cover shadow-lg"
          />
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-100 bg-background p-8 shadow">
            <h3 className="mb-4 text-2xl font-bold">
              Our Mission
            </h3>

            <p className="leading-8 text-slate-500">
              To make online shopping more intelligent, personalized, and
              accessible by combining thoughtful product discovery with
              powerful AI technology.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-100 bg-background p-8 shadow">
            <h3 className="mb-4 text-2xl font-bold">
              Our Vision
            </h3>

            <p className="leading-8 text-slate-500">
              To create a future where every shopper has an intelligent
              assistant that understands their needs and helps them make
              confident purchasing decisions.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="text-center">
          <h2 className="text-3xl font-bold">
            Why Choose Orvanta?
          </h2>

          <p className="mt-3 text-slate-600">
            A smarter way to discover, understand, and choose the products you
            actually need.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {features.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border bg-background p-6 text-center shadow-sm transition hover:-translate-y-2 hover:shadow-lg"
            >
              <div className="mb-4 text-5xl">
                {item.icon}
              </div>

              <h3 className="mb-3 text-xl font-semibold">
                {item.title}
              </h3>

              <p className="text-slate-500">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Statistics */}
      <section className="bg-indigo-600 py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 text-center sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-5xl font-bold">10K+</h3>
            <p className="mt-3">Products Discovered</p>
          </div>

          <div>
            <h3 className="text-5xl font-bold">5K+</h3>
            <p className="mt-3">AI Recommendations</p>
          </div>

          <div>
            <h3 className="text-5xl font-bold">2K+</h3>
            <p className="mt-3">Happy Shoppers</p>
          </div>

          <div>
            <h3 className="text-5xl font-bold">98%</h3>
            <p className="mt-3">User Satisfaction</p>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="text-center">
          <h2 className="text-3xl font-bold">
            The People Behind Orvanta
          </h2>

          <p className="mt-3 text-slate-600">
            A team passionate about building a smarter future for online
            shopping.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {team.map((member) => (
            <div
              key={member.name}
              className="overflow-hidden rounded-2xl border bg-white shadow"
            >
              <Image
                src={member.image}
                alt={member.name}
                width={700}
                height={500}
                className="h-80 w-full object-cover"
              />

              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-black">
                  {member.name}
                </h3>

                <p className="mt-2 text-indigo-600">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-100 py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-4xl font-bold text-slate-900">
            Ready to Shop Smarter?
          </h2>

          <p className="mt-5 leading-8 text-slate-600">
            Discover products that match your needs, get intelligent
            recommendations, and let Orvanta help you make better shopping
            decisions.
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
              Try AI Assistant
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}