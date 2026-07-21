const Newsletter = () => {
  return (
    <section className="bg-indigo-600 py-20 text-white">
      <div className="mx-auto max-w-7xl px-5">
        <div className="mx-auto max-w-3xl text-center">
          <span className="mb-4 inline-block rounded-full bg-white/20 px-4 py-1 text-sm font-medium">
            Stay Ahead of Smarter Shopping
          </span>

          <h2 className="text-3xl font-bold md:text-5xl">
            Discover Better Products, Faster
          </h2>

          <p className="mt-4 text-lg text-indigo-100">
            Subscribe to the Orvanta newsletter and receive personalized
            product discoveries, smart shopping insights, exclusive offers,
            and the latest updates from our AI-powered platform.
          </p>

          <form className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-lg bg-white px-5 py-3 text-gray-900 outline-none focus:ring-4 focus:ring-white/40 sm:w-96"
            />

            <button
              type="submit"
              className="rounded-lg bg-black px-8 py-3 font-semibold text-white transition duration-300 hover:bg-gray-900"
            >
              Join Orvanta
            </button>
          </form>

          <p className="mt-4 text-sm text-indigo-100">
            No spam. Only smarter recommendations, exclusive offers, and
            useful shopping insights.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;