import { JSX } from "react";
import { Event } from "../components/types/types";

export const EventCard = ({ event }: { event: Event }): JSX.Element => {
  return (
    <div className="flex flex-col bg-white rounded-lg shadow-md overflow-hidden h-full transition-transform duration-300 hover:scale-105">
      <div className="relative h-48 overflow-hidden">
        <img
          src={event.image} 
          alt={event.title}
          className="w-full h-full object-cover"
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'https://via.placeholder.com/300x200?text=Image+Not+Available';
          }}
        />
        <div className="absolute top-2 left-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
          {event.category}
        </div>
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <div className="text-sm text-gray-500 mb-1">{event.date}</div>
        <div className="text-sm font-semibold text-gray-700 mb-1">{event.country}</div>
        <h3 className="text-lg font-bold mb-2 line-clamp-2">{event.title}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-grow">{event.description}</p>
        <a 
          href={"/whatson/"+event.slug} 
          className="mt-auto bg-blue-600 hover:bg-blue-700 text-white text-center py-2 px-4 rounded transition-colors duration-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Event
        </a>
      </div>
    </div>
  );
};