"use client";

import {
  BarChart3,
  CalendarDays,
  MapPin,
  Ticket,
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
    title: "Total Events",
    value: "250+",
    icon: CalendarDays,
  },
  {
    id: 2,
    title: "Tickets Sold",
    value: "12K+",
    icon: Ticket,
  },
  {
    id: 3,
    title: "Cities Covered",
    value: "35+",
    icon: MapPin,
  },
  {
    id: 4,
    title: "Monthly Bookings",
    value: "4.8K",
    icon: BarChart3,
  },
];

const chartData = [
  { month: "Jan", bookings: 420 },
  { month: "Feb", bookings: 610 },
  { month: "Mar", bookings: 780 },
  { month: "Apr", bookings: 950 },
  { month: "May", bookings: 1100 },
  { month: "Jun", bookings: 1380 },
];

export default function Statistics() {
  return (
    <section className="py-20 bg-base-100">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}

        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-4xl font-bold">
            Our Impact in Numbers
          </h2>

          <p className="mt-4 text-base-content/70">
            Thousands of users trust EventSphere to discover,
            manage, and book unforgettable events across the
            country.
          </p>
        </div>

        {/* Stats */}

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">

          {stats.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                className="rounded-2xl border border-base-300 bg-background p-6 text-center hover:shadow-lg transition"
              >
                <div className="w-14 h-14 rounded-full bg-blue-500/20 flex items-center justify-center mx-auto mb-4">
                  <Icon className="text-primary" size={28} />
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

        <div className="rounded-2xl border border-base-300 bg-base-200 p-6 h-[380px]">

          <h3 className="text-xl font-semibold mb-6">
            Monthly Event Bookings
          </h3>

          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={chartData}>
              <XAxis dataKey="month" />
              <Tooltip />

              <Area
                type="monotone"
                dataKey="bookings"
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