const categories = [
  {
    id: 1,
    title: "Technology",
    description: "Tech conferences, AI, programming, and innovation events.",
    icon: "💻",
  },
  {
    id: 2,
    title: "Business",
    description: "Networking, entrepreneurship, and startup meetups.",
    icon: "💼",
  },
  {
    id: 3,
    title: "Music",
    description: "Concerts, live performances, and music festivals.",
    icon: "🎵",
  },
  {
    id: 4,
    title: "Sports",
    description: "Sports tournaments, fitness events, and competitions.",
    icon: "⚽",
  },
  {
    id: 5,
    title: "Education",
    description: "Workshops, seminars, and skill development programs.",
    icon: "📚",
  },
  {
    id: 6,
    title: "Arts & Culture",
    description: "Art exhibitions, cultural festivals, and performances.",
    icon: "🎨",
  },
];

export default function Categories() {
  return (
    <section className="py-20 bg-base-100">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-primary font-semibold uppercase tracking-wider">
            Categories
          </p>

          <h2 className="text-4xl font-bold mt-2">
            Explore Event Categories
          </h2>

          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Discover events that match your interests, from technology and
            business to music, sports, education, and cultural experiences.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <div
              key={category.id}
              className="rounded-2xl bg-background border border-gray-200 p-8 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer"
            >
              <div className="text-5xl mb-5">{category.icon}</div>

              <h3 className="text-2xl font-semibold mb-3">
                {category.title}
              </h3>

              <p className="text-gray-500 leading-relaxed">
                {category.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}