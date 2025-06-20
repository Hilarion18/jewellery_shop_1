import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { EventCard } from './EventCard';
import { Event } from '../components/types/types';
import { EventCardTextInImage } from './EventCardTextInImage';

interface Card {
  image: string;
  title: string;
  description: string;
}

interface GridCardProps {
  cards: Event[];
}

const GridCard: React.FC<GridCardProps> = ({ cards }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const [visibleEvents, setVisibleEvents] = useState(4);

  return (
    <div className="w-full">
      <div className="hidden md:grid grid-cols-4 gap-4">
        {/* {cards.map((card, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src={card.image} alt={card.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-lg font-bold">{card.title}</h2             >
 <p className="text-gray-600">{card.description}</p>
            </div>
          </div>
        ))} */}
        {cards.slice(0, visibleEvents).map(event => (
          <EventCardTextInImage key={event.id} event={event} />
        ))}
      </div>
      <div className="md:hidden">
        <Slider {...settings}>
          {/* {cards.map((card, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
              <img src={card.image} alt={card.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h2 className="text-lg font-bold">{card.title}</h2>
                <p className="text-gray-600">{card.description}</p>
              </div>
            </div>
          ))} */}
        {cards.slice(0, visibleEvents).map(event => (
          <EventCardTextInImage key={event.id} event={event} />
        ))}
        </Slider>
      </div>
    </div>
  );
};

export default GridCard;