import FAQ from "@/components/home/FAQ";
import {
    FaEnvelope,
    FaLocationDot,
    FaPhone,
    FaClock,
} from "react-icons/fa6";

export default function ContactPage() {
    return (
        <main className="">
            {/* Hero */}
            <section className="bg-primary text-primary-foreground py-24">
                <div className="mx-auto flex items-center justify-center px-6">
                    <div className="max-w-3xl text-center">
                        <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
                            Contact Us
                        </h1>

                        <p className="mt-6 text-lg leading-8 text-primary-foreground/80">
                            Have questions, feedback, or need assistance? We`d love to hear from
                            you. Reach out to our team anytime, and we will be happy to help.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="max-w-7xl mx-auto px-5 py-20 grid gap-10 lg:grid-cols-2">
                {/* Left */}
                <div>
                    <h2 className="text-3xl font-bold">Get In Touch</h2>

                    <p className="mt-5 text-base-content/70 leading-8">
                        Whether you are an event organizer looking to publish your next
                        event, or an attendee searching for support, our team is ready to
                        help you.
                    </p>

                    <div className="mt-10 space-y-6">
                        <div className="flex gap-4 items-start">
                            <div className="btn btn-circle btn-primary btn-sm">
                                <FaLocationDot />
                            </div>

                            <div>
                                <h4 className="font-semibold">Office</h4>
                                <p className="text-base-content/70">
                                    Dhaka, Bangladesh
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4 items-start">
                            <div className="btn btn-circle btn-primary btn-sm">
                                <FaEnvelope />
                            </div>

                            <div>
                                <h4 className="font-semibold">Email</h4>
                                <p className="text-base-content/70">
                                    support@eventsphere.com
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4 items-start">
                            <div className="btn btn-circle btn-primary btn-sm">
                                <FaPhone />
                            </div>

                            <div>
                                <h4 className="font-semibold">Phone</h4>
                                <p className="text-base-content/70">
                                    +880 1700-000000
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4 items-start">
                            <div className="btn btn-circle btn-primary btn-sm">
                                <FaClock />
                            </div>

                            <div>
                                <h4 className="font-semibold">Working Hours</h4>
                                <p className="text-base-content/70">
                                    Sunday - Thursday
                                    <br />
                                    9:00 AM - 6:00 PM
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right */}
                <div className="card bg-base-100 border border-base-300 shadow-lg">
                    <div className="card-body">
                        <h2 className="card-title text-2xl mb-4">
                            Send Us a Message
                        </h2>

                        <form className="space-y-5">
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="input input-bordered w-full"
                            />

                            <input
                                type="email"
                                placeholder="Your Email"
                                className="input input-bordered w-full"
                            />

                            <input
                                type="text"
                                placeholder="Subject"
                                className="input input-bordered w-full"
                            />

                            <textarea
                                rows={6}
                                placeholder="Write your message..."
                                className="textarea textarea-bordered w-full"
                            ></textarea>

                            <button className="btn btn-primary w-full">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="">
                <FAQ />
            </section>

            {/* CTA */}
            <section className="py-20">
                <div className="max-w-4xl mx-auto text-center px-5">
                    <h2 className="text-4xl font-bold">
                        Let`s Create Amazing Events Together
                    </h2>

                    <p className="mt-5 text-base-content/70">
                        Join EventSphere today and connect with thousands of event
                        enthusiasts across the country.
                    </p>

                    <button className="bg-indigo-500 mt-8 px-2 py-2 rounded-full">
                        Explore Events
                    </button>
                </div>
            </section>
        </main>
    );
}