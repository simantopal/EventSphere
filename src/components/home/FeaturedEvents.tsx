import Image from "next/image";
import Link from "next/link";

const featuredEvents = [
  {
    id: 1,
    title: "Tech Innovators Summit 2026",
    description:
      "Explore the latest innovations in AI, web development, and cloud technologies.",
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800",
    date: "August 18, 2026",
    location: "Dhaka",
    price: "$49",
  },
  {
    id: 2,
    title: "Creative Design Workshop",
    description:
      "Learn UI/UX design principles from industry-leading designers.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800",
    date: "September 05, 2026",
    location: "Chattogram",
    price: "$35",
  },
  {
    id: 3,
    title: "Startup Networking Night",
    description:
      "Meet founders, investors, and entrepreneurs to grow your network.",
    image:
      "https://images.unsplash.com/photo-1515169067868-5387ec356754?w=800",
    date: "October 12, 2026",
    location: "Sylhet",
    price: "Free",
  },
  {
    id: 4,
    title: "Digital Marketing Bootcamp",
    description:
      "Master SEO, social media marketing, and branding strategies.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800",
    date: "November 02, 2026",
    location: "Khulna",
    price: "$29",
  },
];

const FeaturedEvents = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-10">
          <p className="text-primary font-semibold uppercase tracking-wider">
            Featured Events
          </p>

          <h2 className="text-4xl font-bold mt-2">
            Discover Upcoming Experiences
          </h2>

          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Explore handpicked events designed to inspire learning, networking,
            creativity, and unforgettable experiences.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredEvents.map((event) => (
            <div
              key={event.id}
              className="bg-background rounded-2xl border overflow-hidden shadow-sm hover:shadow-lg transition duration-300 flex flex-col"
            >
              <div className="relative h-48">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-xl font-semibold line-clamp-2">
                  {event.title}
                </h3>

                <p className="text-gray-600 text-sm mt-3 line-clamp-3 flex-1">
                  {event.description}
                </p>

                <div className="mt-5 space-y-1 text-sm text-gray-500">
                  <p>📅 {event.date}</p>
                  <p>📍 {event.location}</p>
                  <p className="font-semibold text-primary">{event.price}</p>
                </div>

                <Link
                  href={`/events/${event.id}`}
                  className="mt-5 w-full text-center bg-indigo-800 text-white py-2.5 rounded-xl hover:opacity-90 transition"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedEvents;