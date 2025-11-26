import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import CombinedBackground from './components/CombinedBackground';
import Home from './pages/Home';
import Events from './pages/Events';
import EventDetail from './pages/EventDetail';
import About from './pages/About';
import Board from './pages/Board';
import Contact from './pages/Contact';

function App() {
  const location = useLocation();
  const showNavbar = !location.pathname.startsWith('/events/');

  return (
    <div>
      <CombinedBackground />
      {showNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/board" element={<Board />} />
        <Route path="/events" element={<Events />} />
        <Route path="/events/:eventId" element={<EventDetail />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
