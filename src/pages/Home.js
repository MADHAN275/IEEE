import React from 'react';
import Hero from '../components/Hero';
import About from './About';
import Board from './Board';
import Events from './Events';
import Contact from './Contact';
import Footer from '../components/Footer';


const Home = () => {
  return (
    <div className="">
      
      <section id="home">
        <Hero />
      </section>
      <div className="relative z-10">
        <div style={{ backgroundColor: 'black' }}>
          <section id="about" className="pt-32 ">
            <About />
          </section>
          <section id="board" className="pt-32 ">
            <Board />
          </section>
          <section id="events" className="pt-32 ">
            <Events />
          </section>
        </div>
        <section id="contact" className="pt-32 ">
          <Contact />
        </section>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
