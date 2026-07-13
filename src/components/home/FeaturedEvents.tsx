import EventCard from "../events/EventCard";

const featuredEvents = [
  {
    _id: "1",
    title: "Tech Innovators Summit 2026",
    shortDescription:
      "Explore the latest innovations in AI, web development, and cloud technologies.",
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800",
    date: "August 18, 2026",
    location: "Dhaka",
    price: 49,
    rating: 4.8,
  },
  {
    _id: "2",
    title: "Creative Design Workshop",
    shortDescription:
      "Learn UI/UX design principles from industry-leading designers.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800",
    date: "September 05, 2026",
    location: "Chattogram",
    price: 35,
    rating: 4.7,
  },
  {
    _id: "3",
    title: "Startup Networking Night",
    shortDescription:
      "Meet founders, investors, and entrepreneurs to grow your network.",
    image:
      "https://images.unsplash.com/photo-1515169067868-5387ec356754?w=800",
    date: "October 12, 2026",
    location: "Sylhet",
    price: 0,
    rating: 4.9,
  },
  {
    _id: "4",
    title: "Digital Marketing Bootcamp",
    shortDescription:
      "Master SEO, social media marketing, and branding strategies.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800",
    date: "November 02, 2026",
    location: "Khulna",
    price: 29,
    rating: 4.6,
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
            <EventCard key={event._id} event={event} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedEvents;