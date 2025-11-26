import React from 'react';

const Contact = () => {
  return (
    <div className="text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h1 className="text-5xl font-bold text-center mb-12 uppercase">Contact Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-4 uppercase">Get in Touch</h2>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-lg mb-2">Name</label>
                <input type="text" id="name" className="w-full p-2 rounded bg-gray-800 border border-gray-700" />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-lg mb-2">Email</label>
                <input type="email" id="email" className="w-full p-2 rounded bg-gray-800 border border-gray-700" />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-lg mb-2">Message</label>
                <textarea id="message" rows="4" className="w-full p-2 rounded bg-gray-800 border border-gray-700"></textarea>
              </div>
              <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Send Message
              </button>
            </form>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4 uppercase">Contact Information</h2>
            <p className="text-lg text-gray-400 mb-4">
              Karunya Nagar, Coimbatore, Tamil Nadu 641114
            </p>
            <p className="text-lg text-gray-400 mb-4">
              ieee.cs@karunya.edu
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
