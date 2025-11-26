import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { events } from '../data/events';

const EventDetail = () => {
  const { eventId } = useParams();
  const navigate = useNavigate();
  const event = events.find(e => e.id === eventId);

  if (!event) {
    return <div>Event not found</div>;
  }

  return (
    <div className="bg-black text-white min-h-screen p-4 sm:p-8">
      <button
        onClick={() => navigate(-1)}
        className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mb-8"
      >
        &larr; Back
      </button>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">{event.title}</h1>
        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 text-gray-400 mb-4">
          <span><strong>Date:</strong> {event.date}</span>
          <span><strong>Venue:</strong> {event.venue}</span>
          <span><strong>Duration:</strong> {event.duration}</span>
        </div>
        <p className="text-base sm:text-lg whitespace-pre-wrap mb-8">{event.description}</p>
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Gallery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {event.images.map((image, index) => (
              <img key={index} src={image} alt={`${event.title} gallery ${index + 1}`} className="w-full h-auto rounded-lg" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetail;
