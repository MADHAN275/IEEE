import React, { useState } from 'react';

const facultyCounselor = {
  name: 'Dr. Naveen Sundar',
  role: 'Faculty Counselor',
  emails: ['naveensundar@karunya.edu', 'naveensundar@ieee.org'],
  phone: '+91 9843166880',
};

const studentCoordinators = [
  {
    name: 'Mr. V Sremadukrishna',
    role: 'President & Program Lead',
    email: 'sremadukrishnav@karunya.edu.in',
    phone: '+91 9363870236',
  },
  {
    name: 'Ms. Nandana Nandakumar E N',
    role: 'Chairman',
    email: 'nandananandakumar@karunya.edu.in',
    phone: '+91 9496788478',
  },
  {
    name: 'Ms. Jenefa Jeromi J',
    role: 'Secretary',
    email: 'jenifajeromi@karunya.edu.in',
    phone: '+91 9345899482',
  },
];

const socialLinks = [
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/karunya-ieee-computer-society', icon: '💼' },
  { name: 'Instagram', url: 'https://www.instagram.com/karunya_comp_soc/', icon: '📸' },
  { name: 'YouTube', url: 'https://www.youtube.com/@karunyaieeecomputersociety', icon: '📺' },
];

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [popupMessage, setPopupMessage] = useState('');

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    console.log('Form data submitted:', formData);

    setPopupMessage('Message Sent');
    setFormData({ name: '', email: '', message: '' });

    setTimeout(() => {
      setPopupMessage('');
    }, 3000);
  };

  return (
    <div className="text-white py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 relative z-10">
        <h1 className="text-4xl sm:text-5xl font-bold text-center mb-12">Contact Us</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-8">
            {/* Faculty Counselor */}
            <div className="group bg-gray-800 bg-opacity-50 p-6 sm:p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Faculty Counselor</h2>
              <h3 className="text-xl sm:text-2xl font-bold">{facultyCounselor.name}</h3>
              <p className="text-base sm:text-lg text-gray-400">{facultyCounselor.role}</p>
              <div className="mt-4">
                {facultyCounselor.emails.map((email, index) => (
                  <p key={index} className="text-base sm:text-lg text-gray-400">
                    <span role="img" aria-label="email">📧</span> {email}
                  </p>
                ))}
                <p className="text-base sm:text-lg text-gray-400">
                  <span role="img" aria-label="phone">📞</span> {facultyCounselor.phone}
                </p>
              </div>
            </div>

            {/* Student Coordinators */}
            <div className="group bg-gray-800 bg-opacity-50 p-6 sm:p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Student Coordinators</h2>
              {studentCoordinators.map((coordinator, index) => (
                <div key={index} className="mb-4">
                  <h3 className="text-xl sm:text-2xl font-bold">{coordinator.name}</h3>
                  <p className="text-base sm:text-lg text-gray-400">{coordinator.role}</p>
                  <div className="mt-2">
                    <p className="text-base sm:text-lg text-gray-400">
                      <span role="img" aria-label="email">📧</span> {coordinator.email}
                    </p>
                    <p className="text-base sm:text-lg text-gray-400">
                      <span role="img" aria-label="phone">📞</span> {coordinator.phone}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            {/* Contact Form */}
            <div className="group bg-gray-800 bg-opacity-50 p-6 sm:p-8 rounded-lg shadow-lg h-fit">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Send Us a Message</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-base sm:text-lg mb-2">Name</label>
                  <input type="text" id="name" value={formData.name} onChange={handleChange} className="w-full p-2 rounded bg-gray-700 border border-gray-600" />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-base sm:text-lg mb-2">Email</label>
                  <input type="email" id="email" value={formData.email} onChange={handleChange} className="w-full p-2 rounded bg-gray-700 border border-gray-600" />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block text-base sm:text-lg mb-2">Message</label>
                  <textarea id="message" value={formData.message} onChange={handleChange} rows="4" className="w-full p-2 rounded bg-gray-700 border border-gray-600"></textarea>
                </div>
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Send Message
                </button>
              </form>
              {popupMessage && (
                <div className="mt-4 text-center bg-green-500 text-white font-bold py-2 px-4 rounded">
                  {popupMessage}
                </div>
              )}
            </div>

            {/* Follow Us */}
            <div className="group bg-gray-800 bg-opacity-50 p-6 sm:p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Follow Us</h2>
              <div className="flex justify-center space-x-8">
                {socialLinks.map((link, index) => (
                  <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" className="text-base sm:text-lg text-gray-400 hover:text-white">
                    <span role="img" aria-label={link.name.toLowerCase()}>{link.icon}</span> {link.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;