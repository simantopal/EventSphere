"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How do I book an event?",
    answer:
      "Browse events, open the event details page, and click the Book Now button. Complete the booking form to reserve your seat.",
  },
  {
    question: "Do I need an account to book tickets?",
    answer:
      "Yes. You need to create an account and log in before booking any event to securely manage your bookings.",
  },
  {
    question: "Can I add my own events?",
    answer:
      "Yes. Logged-in users can add and manage their own events from the dashboard.",
  },
  {
    question: "How can I cancel a booking?",
    answer:
      "You can manage your bookings from the My Bookings page. Cancellation availability depends on the event organizer's policy.",
  },
  {
    question: "Is my payment information secure?",
    answer:
      "Yes. EventSphere follows secure authentication and encrypted communication to help protect your personal information.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">
            Frequently Asked Questions
          </h2>
          <p className="mt-4">
            Find answers to the most common questions about EventSphere.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 bg-background rounded-xl shadow-sm"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between px-6 py-5 text-left"
              >
                <span className="font-semibold text-lg">
                  {faq.question}
                </span>

                <ChevronDown
                  className={`h-5 w-5 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index
                    ? "max-h-40 px-6 pb-5"
                    : "max-h-0 px-6"
                }`}
              >
                <p className="text-gray-300 leading-7">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}