const categories = [
  {
    id: 1,
    title: "Electronics",
    description:
      "Explore smartphones, laptops, smart devices, and the latest technology.",
    icon: "📱",
  },
  {
    id: 2,
    title: "Fashion",
    description:
      "Discover clothing, accessories, footwear, and everyday fashion essentials.",
    icon: "👕",
  },
  {
    id: 3,
    title: "Home & Living",
    description:
      "Find furniture, home decor, kitchen essentials, and lifestyle products.",
    icon: "🏠",
  },
  {
    id: 4,
    title: "Beauty & Care",
    description:
      "Shop skincare, personal care, beauty products, and wellness essentials.",
    icon: "✨",
  },
  {
    id: 5,
    title: "Sports & Fitness",
    description:
      "Discover fitness equipment, sports gear, activewear, and outdoor essentials.",
    icon: "🏋️",
  },
  {
    id: 6,
    title: "Books & Learning",
    description:
      "Explore books, educational resources, learning tools, and creative supplies.",
    icon: "📚",
  },
];

export default function Categories() {
  return (
    <section className="bg-base-100 py-20">
      <div className="mx-auto max-w-7xl px-4">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <p className="font-semibold uppercase tracking-wider text-primary">
            Shop by Category
          </p>

          <h2 className="mt-2 text-4xl font-bold">
            Find What You Need, Faster
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-500">
            Explore carefully organized product categories and discover
            products that match your needs with the help of intelligent
            recommendations.
          </p>
        </div>

        {/* Categories */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <div
              key={category.id}
              className="cursor-pointer rounded-2xl border border-gray-200 bg-background p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-5 text-5xl">
                {category.icon}
              </div>

              <h3 className="mb-3 text-2xl font-semibold">
                {category.title}
              </h3>

              <p className="leading-relaxed text-gray-500">
                {category.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}