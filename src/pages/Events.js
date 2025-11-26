import React from 'react';
import { Link } from 'react-router-dom';
import { events } from '../data/events';

const Events = () => {
  return (
    <div className="bg-black text-white py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 relative z-10">
        <h1 className="text-4xl sm:text-5xl font-bold text-center mb-12 ">Events</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <Link key={event.id} to={`/events/${event.id}`} className="group bg-gray-800 bg-opacity-50 p-8 rounded-lg text-center h-full transition-transform duration-300 transform hover:scale-105 shadow-lg">
              <img src={event.images[0]} alt={event.title} className="mx-auto mb-4 rounded-lg" />
              <h3 className="text-xl sm:text-2xl font-bold ">{event.title}</h3>
              <p className="text-base sm:text-lg text-gray-400">{event.date}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
