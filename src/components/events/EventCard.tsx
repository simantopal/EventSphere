import Image from "next/image";
import Link from "next/link";
import { CalendarDays, MapPin, Star, Ticket } from "lucide-react";

export interface Event {
  _id: string;
  title: string;
  image: string;
  shortDescription: string;
  date: string;
  location: string;
  price: number;
  totalSeats: number;
  rating?: number;
}

interface EventCardProps {
  event: Event;
}

const EventCard = ({ event }: EventCardProps) => {
  const {
    _id,
    title,
    image,
    shortDescription,
    date,
    location,
    price,
    totalSeats,
    rating,
  } = event;

  return (
    <div className="flex h-full flex-col overflow-hidden rounded-xl border border-gray-200 bg-background shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="relative h-56 w-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="line-clamp-1 text-xl font-bold">{title}</h3>

        <p className="mt-2 line-clamp-2 text-sm text-gray-600">
          {shortDescription}
        </p>

        <div className="mt-4 space-y-2 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <CalendarDays size={16} />
            <span>{date}</span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <MapPin size={16} />
              <span>{location}</span>
            </div>
            <div className="flex items-center gap-2">
              <span>totalSeats: {totalSeats}</span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Ticket size={16} />
              <span className="font-semibold text-indigo-600">
                ${price}
              </span>
            </div>

            <div className="flex items-center gap-1">
              <Star
                size={16}
                className="fill-yellow-400 text-yellow-400"
              />
              <span>{rating}</span>
            </div>
          </div>
        </div>

        <div className="mt-auto pt-5">
          <Link
            href={`/explore-events/${_id}`}
            className="block rounded-lg bg-indigo-600 py-3 text-center font-medium text-white transition hover:bg-indigo-700"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EventCard;