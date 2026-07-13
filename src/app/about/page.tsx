export default function AboutPage() {
  const features = [
    {
      title: "Easy Event Discovery",
      description:
        "Browse concerts, workshops, conferences, and community events with powerful search and filtering.",
      icon: "🎉",
    },
    {
      title: "Secure Booking",
      description:
        "Book tickets confidently with a secure and seamless reservation experience.",
      icon: "🔒",
    },
    {
      title: "Trusted Organizers",
      description:
        "Connect with verified event organizers who create quality experiences.",
      icon: "⭐",
    },
    {
      title: "Responsive Experience",
      description:
        "Enjoy a smooth experience on desktop, tablet, and mobile devices.",
      icon: "📱",
    },
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "Founder & Event Manager",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500",
    },
    {
      name: "David Miller",
      role: "Frontend Developer",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500",
    },
    {
      name: "Emily Brown",
      role: "Customer Success",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500",
    },
  ];

  return (
    <main className="">
      {/* Hero */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 text-center">
          <h1 className="text-4xl font-bold md:text-6xl">
            About EventSphere
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-100">
            EventSphere is a modern event management platform designed to help
            people discover, explore, and book amazing events while empowering
            organizers to manage their events effortlessly.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="mb-6 text-3xl font-bold">Our Story</h2>
            <p className="mb-4 leading-8">
              EventSphere was built with a simple vision: making event discovery
              and ticket booking easier for everyone. Whether you are attending a
              live concert, a technology conference, or a local community event,
              our platform helps you find experiences that match your interests.
            </p>

            <p className="leading-8">
              We focus on clean design, secure booking, and a seamless user
              experience so that every event journey is simple, enjoyable, and
              memorable.
            </p>
          </div>

          <img
            src="https://images.unsplash.com/photo-1511578314322-379afb476865?w=1000"
            alt="Event"
            className="h-[420px] w-full rounded-2xl object-cover shadow-lg"
          />
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-2">
          <div className="rounded-2xl bg-background p-8 shadow border border-gray-100">
            <h3 className="mb-4 text-2xl font-bold">Our Mission</h3>
            <p className="text-gray-500 leading-8">
              To simplify event discovery and booking through technology while
              creating a secure and enjoyable experience for both attendees and
              organizers.
            </p>
          </div>

          <div className="rounded-2xl bg-background p-8 shadow border border-gray-100">
            <h3 className="mb-4 text-2xl font-bold">Our Vision</h3>
            <p className="text-gray-500 leading-8">
              To become one of the most trusted event platforms where people can
              connect through inspiring experiences, learning opportunities, and
              entertainment.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="text-center">
          <h2 className="text-3xl font-bold">Why Choose EventSphere?</h2>
          <p className="mt-3">
            Everything you need to discover and manage events in one place.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {features.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border bg-background p-6 text-center shadow-sm transition hover:-translate-y-2 hover:shadow-lg"
            >
              <div className="mb-4 text-5xl">{item.icon}</div>

              <h3 className="mb-3 text-xl font-semibold">{item.title}</h3>

              <p className="text-gray-500">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Statistics */}
      <section className="bg-indigo-600 py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 text-center sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-5xl font-bold">500+</h3>
            <p className="mt-3">Events Hosted</p>
          </div>

          <div>
            <h3 className="text-5xl font-bold">10K+</h3>
            <p className="mt-3">Tickets Booked</p>
          </div>

          <div>
            <h3 className="text-5xl font-bold">2K+</h3>
            <p className="mt-3">Active Users</p>
          </div>

          <div>
            <h3 className="text-5xl font-bold">98%</h3>
            <p className="mt-3">Customer Satisfaction</p>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="text-center">
          <h2 className="text-3xl font-bold">Meet Our Team</h2>
          <p className="mt-3 text-gray-600">
            Passionate people behind EventSphere.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {team.map((member) => (
            <div
              key={member.name}
              className="overflow-hidden rounded-2xl border bg-white shadow"
            >
              <img
                src={member.image}
                alt={member.name}
                className="h-80 w-full object-cover"
              />

              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-black">{member.name}</h3>
                <p className="mt-2 text-indigo-600">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-300 py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-4xl font-bold text-black">
            Ready to Discover Your Next Event?
          </h2>

          <p className="mt-5 text-black">
            Explore hundreds of exciting events, book your tickets with
            confidence, and create unforgettable memories with EventSphere.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button className="rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white transition hover:bg-indigo-700">
              Explore Events
            </button>

            <button className="rounded-xl border border-indigo-600 px-6 py-3 font-semibold text-indigo-600 transition hover:bg-indigo-600 hover:text-white">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}