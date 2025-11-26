import React from 'react';

const facultyAdvisors = [
  { name: 'Dr. J. Immanuel Johnraja', role: 'HOD CSE', image: '/Immanuel Johnraja - Head Of Division (CSE).jpeg' },
  { name: 'Dr. Naveen Sundar', role: 'Faculty Counselor', image: '/Dr.Naveen Sundar - Faculty Counselor.jpeg' },
];

const executiveCommittee = [
    { name: 'Mr. V Sremadukrishna', role: 'President & Program Lead', image: '/OUTREACH & CSR LEAD Mr. V SREMADUKRISHNA.jpg' },
    { name: 'Ms. Nandana Nandakumar E N', role: 'Chairman', image: '/TRAINING AND WORKSHOP LEAD Ms. NANDANA NANDAKUMAR E N.PNG' },
    { name: 'Ms. Jenefa Jeromi J', role: 'Secretary', image: '/STUDENT ACTIVITIES COORDINATOR Ms. JENEFA JEROMI J.jpg' },
    { name: 'Ms. Shivali', role: 'Special Advisor', image: '/Ms. SHIVALI.jpeg' },
    { name: 'Ms. Charunetra NR', role: 'Vice Chair', image: '/VICE CHAIR Ms. CHARUNETRA NR.jpeg' },
    { name: 'Mr. Siva Sankar B', role: 'Treasurer', image: '/TREASURER Mr. SIVA SANKAR B.jpg' },
];

const domainFocusedLeadership = [
    { name: 'Mr. Fanisus R', role: 'Lead for Product Development', image: '/PRESIDENT_Mr_FANISUS_R.jpg' },
    { name: 'Ms. D. Jerlin Seraphina', role: 'Lead for Product Development', image: '/CHAIR Ms. D. JERLIN SERAPHINA.jpg' },
    { name: 'Ms. Trina Joan Lynus', role: 'Lead for Research & Publications', image: '/SECRETARY Ms. TRINA JOAN LYNUS.jpeg' },
    { name: 'Mr. Anto Melvin A', role: 'Lead for Research & Publications', image: '/PROGRAM LEAD Mr. ANTO MELVIN A.jpeg' },
];

const teamLeads = [
    { name: 'Mr. Madhan T', role: 'Web Lead', image: '/WEB LEAD Mr. MADHAN T.jpg' },
    { name: 'Ms. Mershiya', role: 'Social Media Lead', image: '/SOCIAL MEDIA LEAD Ms. MERSHIYA.jpg' },
    { name: 'Mr. Rishi Jayanath A', role: 'Innovation and Research Lead', image: '/INNOVATION AND RESEARCH LEAD Mr. RISHI JAYANATH A.jpg' },
    { name: 'Mr. Johann Shoni George', role: 'Sponsorship and Partnership Lead', image: '/SPONSORSHIP AND PARTNERSHIP LEAD Mr. JOHANN SHONI GEORGE.jpeg' },
    { name: 'Mr. Febin K Renu', role: 'Alumni and Industry Relation Lead', image: '/ALUMNI AND INDUSTRY RELATION LEAD Mr. FEBIN K RENU.jpeg' },
    { name: 'Mr. Adwaith Sajikumar', role: 'Development Lead', image: '/DEVELOPMENT LEAD Mr. ADWAITH SAJIKUMAR.jpg' },
    { name: 'Mr. Harish R', role: 'Membership Chair', image: '/MEMBERSHIP CHAIR Mr. HARISH R.jpg' },
    { name: 'Ms. Rebi Jael B', role: 'Women in Engineering Lead', image: '/WOMEN IN ENGINEERING LEAD Ms. REBI JAEL B.jpeg' },
    { name: 'Ms. Saro Franzika C S', role: 'Technical Event Lead', image: '/TECHNICAL EVENT LEAD Ms. SARO FRANZIKA C S.jpeg' },
    { name: 'Mr. Kingston Y C', role: 'Poster and Video Editor', image: '/POSTER AND VIDEO EDITOR Mr. KINGSTON Y C.jpg' },
];

const Board = () => {
  return (
    <div className="text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h1 className="text-5xl font-bold text-center mb-12 uppercase">Meet Our Leaders</h1>

        <h2 className="text-3xl font-bold text-center my-8 uppercase">Faculty Advisor</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {facultyAdvisors.map((member, index) => (
            <div key={index} className="w-96">
              <div className="group bg-gray-800 bg-opacity-50 p-8 rounded-lg text-center h-full transition-transform duration-300 transform hover:scale-105 shadow-lg">
                <img src={member.image} alt={member.name} className="w-48 h-48 mx-auto mb-4 rounded-lg object-cover" />
                <h3 className="text-2xl font-bold uppercase">{member.name}</h3>
                <p className="text-lg text-gray-400">{member.role}</p>
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-3xl font-bold text-center my-8 uppercase">Executive Committee</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {executiveCommittee.map((member, index) => (
            <div key={index}>
              <div className="group bg-gray-800 bg-opacity-50 p-8 rounded-lg text-center h-full transition-transform duration-300 transform hover:scale-105 shadow-lg">
                <img src={member.image} alt={member.name} className="w-48 h-48 mx-auto mb-4 rounded-lg object-cover" />
                <h3 className="text-2xl font-bold uppercase">{member.name}</h3>
                <p className="text-lg text-gray-400">{member.role}</p>
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-3xl font-bold text-center my-8 uppercase">Domain-Focused Leadership</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {domainFocusedLeadership.map((member, index) => (
            <div key={index}>
              <div className="group bg-gray-800 bg-opacity-50 p-8 rounded-lg text-center h-full transition-transform duration-300 transform hover:scale-105 shadow-lg">
                <img src={member.image} alt={member.name} className="w-48 h-48 mx-auto mb-4 rounded-lg object-cover" />
                <h3 className="text-2xl font-bold uppercase">{member.name}</h3>
                <p className="text-lg text-gray-400">{member.role}</p>
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-3xl font-bold text-center my-8 uppercase">Team Leads</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamLeads.map((member, index) => (
            <div key={index}>
              <div className="group bg-gray-800 bg-opacity-50 p-8 rounded-lg text-center h-full transition-transform duration-300 transform hover:scale-105 shadow-lg">
                <img src={member.image} alt={member.name} className="w-48 h-48 mx-auto mb-4 rounded-lg object-cover" />
                <h3 className="text-2xl font-bold uppercase">{member.name}</h3>
                <p className="text-lg text-gray-400">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Board;