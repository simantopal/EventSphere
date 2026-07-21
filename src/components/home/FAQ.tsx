"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is Orvanta?",
    answer:
      "Orvanta is an AI-powered shopping platform that helps you discover relevant products, compare options, and make smarter purchasing decisions with intelligent recommendations.",
  },
  {
    question: "How does the AI Shopping Assistant work?",
    answer:
      "Simply tell the AI assistant what you are looking for, your preferences, and your budget. It analyzes your needs and helps you discover products that best match your requirements.",
  },
  {
    question: "Do I need an account to use Orvanta?",
    answer:
      "You can explore products without an account. However, creating an account allows you to receive personalized recommendations, save preferences, manage orders, and access your shopping history.",
  },
  {
    question: "How does Orvanta personalize product recommendations?",
    answer:
      "Orvanta analyzes your preferences, product interactions, categories of interest, and shopping behavior to provide more relevant recommendations over time.",
  },
  {
    question: "Can I add and manage products?",
    answer:
      "Yes. Authorized users can add products and manage their product listings through the product management dashboard.",
  },
  {
    question: "Is my personal information secure?",
    answer:
      "Yes. Orvanta is designed with secure authentication and protected API communication to help keep your account and personal information safe.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20">
      <div className="mx-auto max-w-4xl px-4">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold">
            Frequently Asked Questions
          </h2>

          <p className="mt-4 text-base-content/70">
            Find answers to common questions about shopping with Orvanta.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className="rounded-xl border border-gray-200 bg-background shadow-sm"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex w-full items-center justify-between px-6 py-5 text-left"
              >
                <span className="text-lg font-semibold">
                  {faq.question}
                </span>

                <ChevronDown
                  className={`h-5 w-5 shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index
                    ? "max-h-60 px-6 pb-5"
                    : "max-h-0 px-6"
                }`}
              >
                <p className="leading-7 text-base-content/70">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}