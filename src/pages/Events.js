import React from 'react';

const events = [
  { name: 'VISUAL INTELLIGENCE', date: '04.09.2025', image: '/VISUAL.png' },
  { name: 'COMPOSE THE FUTURE', date: '12.09.2025', image: '/COMPOSE THE FUTURE.png' },
  { name: 'CODE QUEST', date: '12.09.2025', image: '/CODE QUEST.png' },
  { name: 'MINDSYNC', date: '12.09.2025', image: '/mindsync.png' },
  { name: 'NETWORK QUEST', date: '12.09.2025', image: '/NETWORK QUEST.png' },
  { name: 'IEEE INAUGURATION 2025', date: '12.08.2025', image: '/INAUGURATION.png' },
];

const Events = () => {
  return (
    <div className="text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h1 className="text-5xl font-bold text-center mb-12 uppercase">Events</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div key={index} className="group bg-gray-800 bg-opacity-50 p-8 rounded-lg text-center h-full transition-transform duration-300 transform hover:scale-105 shadow-lg">
              <img src={event.image} alt={event.name} className="mx-auto mb-4 rounded-lg" />
              <h3 className="text-2xl font-bold uppercase">{event.name}</h3>
              <p className="text-lg text-gray-400">{event.date}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
