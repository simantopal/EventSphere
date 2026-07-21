"use client";

import {
  BarChart3,
  BrainCircuit,
  Package,
  ShoppingCart,
} from "lucide-react";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  Tooltip,
} from "recharts";

const stats = [
  {
    id: 1,
    title: "Products Available",
    value: "10K+",
    icon: Package,
  },
  {
    id: 2,
    title: "AI Recommendations",
    value: "25K+",
    icon: BrainCircuit,
  },
  {
    id: 3,
    title: "Happy Shoppers",
    value: "8K+",
    icon: ShoppingCart,
  },
  {
    id: 4,
    title: "Monthly Interactions",
    value: "18K+",
    icon: BarChart3,
  },
];

const chartData = [
  { month: "Jan", interactions: 520 },
  { month: "Feb", interactions: 760 },
  { month: "Mar", interactions: 980 },
  { month: "Apr", interactions: 1250 },
  { month: "May", interactions: 1580 },
  { month: "Jun", interactions: 1920 },
];

export default function Statistics() {
  return (
    <section className="bg-base-100 py-20">
      <div className="mx-auto max-w-7xl px-4">
        {/* Header */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-4xl font-bold">
            Smarter Shopping, Measurable Impact
          </h2>

          <p className="mt-4 text-base-content/70">
            Thousands of shoppers use Orvanta to discover relevant products,
            explore intelligent recommendations, and make more confident
            purchasing decisions.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="mb-16 grid grid-cols-2 gap-6 lg:grid-cols-4">
          {stats.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                className="rounded-2xl border border-base-300 bg-background p-6 text-center transition hover:shadow-lg"
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-indigo-500/20">
                  <Icon
                    className="text-primary"
                    size={28}
                  />
                </div>

                <h3 className="text-3xl font-bold">
                  {item.value}
                </h3>

                <p className="mt-2 text-base-content/70">
                  {item.title}
                </p>
              </div>
            );
          })}
        </div>

        {/* Chart */}
        <div className="h-[380px] rounded-2xl border border-base-300 bg-base-200 p-6">
          <h3 className="mb-6 text-xl font-semibold">
            Monthly AI Shopping Interactions
          </h3>

          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={chartData}>
              <XAxis dataKey="month" />

              <Tooltip />

              <Area
                type="monotone"
                dataKey="interactions"
                stroke="#2563eb"
                fill="#93c5fd"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
}