import React, { useState } from 'react';
import MemberModal from '../components/MemberModal';

const facultyAdvisors = [
  { name: 'Dr. J. Immanuel Johnraja', role: 'HOD CSE', image: '/Immanuel Johnraja - Head Of Division (CSE).jpeg', description: 'As the Head of the Computer Science Engineering Department, Dr. J. Immanuel Johnraja provides strategic oversight and academic leadership to the department, fostering an environment of innovation and excellence.' },
  { name: 'Dr. Naveen Sundar', role: 'Faculty Counselor', image: '/Dr.Naveen Sundar - Faculty Counselor.jpeg', description: 'Dr. Naveen Sundar serves as the Faculty Counselor, offering guidance and support to the students of the IEEE Computer Society chapter, and ensuring their activities align with the academic goals of the institution.' },
];

const executiveCommittee = [
    { name: 'Mr. V Sremadukrishna', role: 'President & Program Lead', image: '/OUTREACH & CSR LEAD Mr. V SREMADUKRISHNA.jpg', description: 'As President & Program Lead, Mr. V Sremadukrishna leads the IEEE Student Chapter, curating and organizing a diverse range of technical and professional development programs. He drives strategic initiatives, organizes workshops and hackathons, and mentors students to build technical skills, collaboration, and a thriving tech community on campus.' },
    { name: 'Ms. Nandana Nandakumar E N', role: 'Chairman', image: '/TRAINING AND WORKSHOP LEAD Ms. NANDANA NANDAKUMAR E N.PNG', description: 'As Chairman, Ms. Nandana Nandakumar E N presides over the executive committee, ensuring the smooth functioning of the chapter and that all activities are aligned with the IEEE\'s mission and vision.' },
    { name: 'Ms. Jenefa Jeromi J', role: 'Secretary', image: '/STUDENT ACTIVITIES COORDINATOR Ms. JENEFA JEROMI J.jpg', description: 'As Secretary, Ms. Jenefa Jeromi J is responsible for maintaining the records of the chapter, managing communications, and ensuring that all administrative tasks are handled efficiently.' },
    { name: 'Ms. Shivali', role: 'Special Advisor', image: '/Ms. SHIVALI.jpeg', description: 'As Special Advisor, Ms. Shivali provides expert guidance and mentorship to the executive committee, drawing from her extensive experience and knowledge.' },
    { name: 'Ms. Charunetra NR', role: 'Vice Chair', image: '/VICE CHAIR Ms. CHARUNETRA NR.jpeg', description: 'As Vice Chair, Ms. Charunetra NR supports the Chairman in their duties and steps in to lead the committee in their absence, contributing to the overall management of the chapter.' },
    { name: 'Mr. Siva Sankar B', role: 'Treasurer', image: '/TREASURER Mr. SIVA SANKAR B.jpg', description: 'As Treasurer, Mr. Siva Sankar B manages the finances of the chapter, ensuring that all funds are accounted for and used effectively to support the chapter\'s activities.' },
];

const domainFocusedLeadership = [
    { name: 'Mr. Fanisus R', role: 'Lead for Product Development', image: '/PRESIDENT_Mr_FANISUS_R.jpg', description: 'As Lead for Product Development, Mr. Fanisus R spearheads initiatives to create innovative products and solutions, guiding students through the development lifecycle.' },
    { name: 'Ms. D. Jerlin Seraphina', role: 'Lead for Product Development', image: '/CHAIR Ms. D. JERLIN SERAPHINA.jpg', description: 'As Lead for Product Development, Ms. D. Jerlin Seraphina co-leads the product development team, fostering a culture of creativity and hands-on learning.' },
    { name: 'Ms. Trina Joan Lynus', role: 'Lead for Research & Publications', image: '/SECRETARY Ms. TRINA JOAN LYNUS.jpeg', description: 'As Lead for Research & Publications, Ms. Trina Joan Lynus encourages students to engage in research and publish their findings, promoting academic excellence.' },
    { name: 'Mr. Anto Melvin A', role: 'Lead for Research & Publications', image: '/PROGRAM LEAD Mr. ANTO MELVIN A.jpeg', description: 'As Lead for Research & Publications, Mr. Anto Melvin A co-leads the research and publications team, providing guidance and support to aspiring student researchers.' },
];

const teamLeads = [
    { name: 'Mr. Madhan T', role: 'Web Lead', image: '/WEB LEAD Mr. MADHAN T.jpg', description: 'As Web Lead, Mr. Madhan T is responsible for the design, development, and maintenance of the chapter\'s website and other web-based platforms.' },
    { name: 'Ms. Mershiya', role: 'Social Media Lead', image: '/SOCIAL MEDIA LEAD Ms. MERSHIYA.jpg', description: 'As Social Media Lead, Ms. Mershiya manages the chapter\'s presence on various social media platforms, engaging with the community and promoting events.' },
    { name: 'Mr. Rishi Jayanath A', role: 'Innovation and Research Lead', image: '/INNOVATION AND RESEARCH LEAD Mr. RISHI JAYANATH A.jpg', description: 'As Innovation and Research Lead, Mr. Rishi Jayanath A fosters a culture of innovation and research within the chapter, encouraging students to explore new ideas and technologies.' },
    { name: 'Mr. Johann Shoni George', role: 'Sponsorship and Partnership Lead', image: '/SPONSORSHIP AND PARTNERSHIP LEAD Mr. JOHANN SHONI GEORGE.jpeg', description: 'As Sponsorship and Partnership Lead, Mr. Johann Shoni George builds and maintains relationships with industry partners to secure funding and support for the chapter\'s activities.' },
    { name: 'Mr. Febin K Renu', role: 'Alumni and Industry Relation Lead', image: '/ALUMNI AND INDUSTRY RELATION LEAD Mr. FEBIN K RENU.jpeg', description: 'As Alumni and Industry Relation Lead, Mr. Febin K Renu connects the chapter with alumni and industry professionals, creating networking and mentorship opportunities for students.' },
    { name: 'Mr. Adwaith Sajikumar', role: 'Development Lead', image: '/DEVELOPMENT LEAD Mr. ADWAITH SAJIKUMAR.jpg', description: 'As Development Lead, Mr. Adwaith Sajikumar leads the technical development of various projects within the chapter, mentoring students and ensuring high-quality outcomes.' },
    { name: 'Mr. Harish R', role: 'Membership Chair', image: '/MEMBERSHIP CHAIR Mr. HARISH R.jpg', description: 'As Membership Chair, Mr. Harish R is responsible for recruiting new members and managing the membership database, ensuring a vibrant and active community.' },
    { name: 'Ms. Rebi Jael B', role: 'Women in Engineering Lead', image: '/WOMEN IN ENGINEERING LEAD Ms. REBI JAEL B.jpeg', description: 'As Women in Engineering Lead, Ms. Rebi Jael B champions the inclusion and advancement of women in engineering, organizing events and initiatives to support female students.' },
    { name: 'Ms. Saro Franzika C S', role: 'Technical Event Lead', image: '/TECHNICAL EVENT LEAD Ms. SARO FRANZIKA C S.jpeg', description: 'As Technical Event Lead, Ms. Saro Franzika C S plans and executes a variety of technical events, such as workshops, seminars, and competitions, to enhance the skills of the members.' },
    { name: 'Mr. Kingston Y C', role: 'Poster and Video Editor', image: '/POSTER AND VIDEO EDITOR Mr. KINGSTON Y C.jpg', description: 'As Poster and Video Editor, Mr. Kingston Y C is responsible for creating visually appealing promotional materials for the chapter\'s events and activities.' },
];

const Board = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  const openModal = (member) => {
    setSelectedMember(member);
  };

  const closeModal = () => {
    setSelectedMember(null);
  };

  return (
    <div className="text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h1 className="text-5xl font-bold text-center mb-12">Meet Our Leaders</h1>

        <h2 className="text-3xl font-bold text-center my-8">Faculty Advisor</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {facultyAdvisors.map((member, index) => (
            <div key={index} className="w-96 cursor-pointer" onClick={() => openModal(member)}>
              <div className="group bg-gray-800 bg-opacity-50 p-8 rounded-lg text-center h-full transition-transform duration-300 transform hover:scale-105 shadow-lg">
                <img src={member.image} alt={member.name} className="w-48 h-48 mx-auto mb-4 rounded-lg object-cover" />
                <h3 className="text-2xl font-bold">{member.name}</h3>
                <p className="text-lg text-gray-400">{member.role}</p>
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-3xl font-bold text-center my-8">Executive Committee</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {executiveCommittee.map((member, index) => (
            <div key={index} className="cursor-pointer" onClick={() => openModal(member)}>
              <div className="group bg-gray-800 bg-opacity-50 p-8 rounded-lg text-center h-full transition-transform duration-300 transform hover:scale-105 shadow-lg">
                <img src={member.image} alt={member.name} className="w-48 h-48 mx-auto mb-4 rounded-lg object-cover" />
                <h3 className="text-2xl font-bold">{member.name}</h3>
                <p className="text-lg text-gray-400">{member.role}</p>
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-3xl font-bold text-center my-8">Domain-Focused Leadership</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {domainFocusedLeadership.map((member, index) => (
            <div key={index} className="cursor-pointer" onClick={() => openModal(member)}>
              <div className="group bg-gray-800 bg-opacity-50 p-8 rounded-lg text-center h-full transition-transform duration-300 transform hover:scale-105 shadow-lg">
                <img src={member.image} alt={member.name} className="w-48 h-48 mx-auto mb-4 rounded-lg object-cover" />
                <h3 className="text-2xl font-bold">{member.name}</h3>
                <p className="text-lg text-gray-400">{member.role}</p>
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-3xl font-bold text-center my-8">Team Leads</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamLeads.map((member, index) => (
            <div key={index} className="cursor-pointer" onClick={() => openModal(member)}>
              <div className="group bg-gray-800 bg-opacity-50 p-8 rounded-lg text-center h-full transition-transform duration-300 transform hover:scale-105 shadow-lg">
                <img src={member.image} alt={member.name} className="w-48 h-48 mx-auto mb-4 rounded-lg object-cover" />
                <h3 className="text-2xl font-bold">{member.name}</h3>
                <p className="text-lg text-gray-400">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <MemberModal member={selectedMember} onClose={closeModal} />
    </div>
  );
};

export default Board;