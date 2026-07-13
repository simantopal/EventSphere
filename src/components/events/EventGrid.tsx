import EventCard from "./EventCard";

export interface Event {
  _id: string;
  title: string;
  shortDescription: string;
  image: string;
  category: string;
  location: string;
  date: string;
  price: number;
  rating: number;
}

interface EventGridProps {
  events: Event[];
}

const EventGrid = ({ events }: EventGridProps) => {
  if (events.length === 0) {
    return (
      <div className="py-20 text-center">
        <h2 className="text-2xl font-semibold">No Events Found</h2>
        <p className="mt-2 text-gray-500">
          Try adjusting your search or filters.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {events.map((event) => (
        <EventCard key={event._id} event={event} />
      ))}
    </div>
  );
};

export default EventGrid;