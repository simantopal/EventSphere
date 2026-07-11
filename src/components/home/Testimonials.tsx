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
    role: "Marketing Manager",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
    rating: 5,
    review:
      "EventSphere made booking event tickets incredibly simple. The platform is fast, easy to navigate, and helped me discover amazing local events.",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Software Engineer",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
    rating: 5,
    review:
      "I love the clean interface and quick booking process. Finding and managing events has never been this convenient.",
  },
  {
    id: 3,
    name: "Emily Davis",
    role: "Entrepreneur",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
    rating: 5,
    review:
      "From browsing events to receiving booking confirmations, everything works smoothly. Highly recommended for anyone who attends events regularly.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-base-100">
      <div className="max-w-7xl mx-auto px-5">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-4xl font-bold text-base-content">
            What Our Users Say
          </h2>
          <p className="mt-4 text-base-content/70">
            Thousands of users trust EventSphere to discover, book, and manage
            events with confidence.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="rounded-2xl border border-base-300 bg-base-200 p-6 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, index) => (
                  <span key={index} className="text-yellow-400 text-lg">
                    ★
                  </span>
                ))}
              </div>

              {/* Review */}
              <p className="text-base-content/80 leading-7 mb-6">
                {testimonial.review}
              </p>

              {/* User */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover"
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