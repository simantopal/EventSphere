import Image from "next/image";

type Testimonial = {
  id: number;
  name: string;
  role: string;
  image: string;
  rating: number;
  review: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Online Shopper",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
    rating: 5,
    review:
      "Orvanta has completely changed the way I shop online. The AI recommendations help me discover products that actually match my needs instead of endlessly browsing.",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Tech Enthusiast",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
    rating: 5,
    review:
      "The AI shopping assistant makes product discovery incredibly easy. I can describe what I need and quickly find relevant products without wasting time.",
  },
  {
    id: 3,
    name: "Emily Davis",
    role: "Small Business Owner",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
    rating: 5,
    review:
      "I love how personalized the shopping experience feels. Orvanta understands my preferences and keeps helping me discover better products.",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-base-100 py-20">
      <div className="mx-auto max-w-7xl px-5">
        {/* Section Heading */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <h2 className="text-4xl font-bold text-base-content">
            What Our Shoppers Say
          </h2>

          <p className="mt-4 text-base-content/70">
            Discover how Orvanta is helping people shop smarter with AI-powered
            product discovery and personalized recommendations.
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="rounded-2xl border border-base-300 bg-background p-6 shadow-sm transition-all duration-300 hover:shadow-lg"
            >
              {/* Rating */}
              <div className="mb-4 flex">
                {[...Array(testimonial.rating)].map((_, index) => (
                  <span
                    key={index}
                    className="text-lg text-yellow-400"
                  >
                    ★
                  </span>
                ))}
              </div>

              {/* Review */}
              <p className="mb-6 leading-7 text-base-content/80">
                {testimonial.review}
              </p>

              {/* User */}
              <div className="flex items-center gap-4">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={900}
                  height={700}
                  className="h-14 w-14 rounded-full object-cover"
                />

                <div>
                  <h4 className="font-semibold text-base-content">
                    {testimonial.name}
                  </h4>

                  <p className="text-sm text-base-content/60">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;