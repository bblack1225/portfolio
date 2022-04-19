import { Route, Routes } from 'react-router-dom';
import About from '../components/About';
import ContactUs from '../components/ContactUs';
import OurWorks from '../components/OurWorks';
import Home from './Home';

function Pages() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/our-works" element={<OurWorks />} />
        <Route path="/about" element={<Home />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
    </div>
  );
}

export default Pages;
