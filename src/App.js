import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Appointment from './Components/Appointment';
import Service from './Components/Service';
import About from './Components/About';
import Contact from './Components/Contact';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Footer from './Components/Footer';

// New Inner Component to safely use useLocation
function AppContent() {
  const location = useLocation();

  // Hide Footer on Login and Signup pages
  const hideFooter = location.pathname === '/login' || location.pathname === '/signup';

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path='/home' element={<Home />} />
        <Route path='/appointment' element={<Appointment />} />
        <Route path='/service' element={<Service />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
      {!hideFooter && <Footer />}
    </>
  );
}

// Outer App component with Router
function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
