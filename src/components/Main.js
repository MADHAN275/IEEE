import React from 'react';
import Hero from './Hero';
import About from '../pages/About';
import Board from '../pages/Board';
import Events from '../pages/Events';
import Contact from '../pages/Contact';
import Footer from './Footer';


const Main = () => {
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

export default Main;
