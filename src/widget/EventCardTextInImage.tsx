import { JSX } from "react";
import { Event } from "../components/types/types";

export const EventCardTextInImage = ({ event }: { event: Event }): JSX.Element => {
  return (
    <div className="flex flex-col bg-white rounded-lg border-gray-500 border-2 shadow-md overflow-hidden h-full transition-transform duration-300 hover:scale-105">
      <div className="relative h-48 overflow-hidden">
        {/* <img
          src={event.image} 
          alt={event.title}
          className="w-full h-full object-cover"
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'https://via.placeholder.com/300x200?text=Image+Not+Available';
          }}
        /> */}
        <div 
          className="absolute inset-0 bg-cover bg-center brightness-100"
          style={{
            backgroundImage: `url(${event.image})`
          }}
        >
          {/* Overlay for better text visibility (optional) */}
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
          
        <div className="absolute bottom-2 left-2 bg-[#FA503D] bg-opacity-100 text-white text-xs px-2 py-1 rounded">
          {event.date}
        </div>
      </div>
      <div className="p-4 flex flex-col flex-grow bg-[#8D206A] text-white">
        <div className="text-sm font-light text-gray-100 mb-1">{event.country}</div>
        <p className="text-gray-100 text-base font-semibold mb-0 h-10 mb-2 line-clamp-3 flex-grow">{event.category}</p>
        <h3 className="flex text-lg text-start justify-start font-bold mb-2 line-clamp-2 ">{event.title}</h3>
        <p className="text-gray-100 text-sm mb-4 line-clamp-3 flex-grow">{event.description}</p>
        <a 
          href={"/whatson/"+event.slug} 
          className="mt-auto bg-white hover:bg-blue-700 text-gray-700 hover:text-gray-200 text-center py-2 px-4 rounded transition-colors duration-300"
          // target="_blank"
          rel="noopener noreferrer"
        >
          View More
        </a>
      </div>
    </div>
  );
};