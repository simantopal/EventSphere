const Newsletter = () => {
  return (
    <section className="py-20 bg-indigo-600 text-white">
      <div className="max-w-7xl mx-auto px-5">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block px-4 py-1 mb-4 text-sm font-medium rounded-full bg-white/20">
            Stay Updated
          </span>

          <h2 className="text-3xl md:text-5xl font-bold">
            Never Miss an Upcoming Event
          </h2>

          <p className="mt-4 text-indigo-100 text-lg">
            Subscribe to our newsletter and be the first to discover exciting
            events, exclusive offers, and important announcements from
            EventSphere.
          </p>

          <form className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full sm:w-96 px-5 py-3 rounded-lg text-gray-900 bg-white outline-none focus:ring-4 focus:ring-white/40"
            />

            <button
              type="submit"
              className="px-8 py-3 rounded-lg bg-black text-white font-semibold hover:bg-gray-900 transition duration-300"
            >
              Subscribe
            </button>
          </form>

          <p className="mt-4 text-sm text-indigo-100">
            No spam. Only event updates, exclusive deals, and exciting news.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;