import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './js/Nav';
import About from './js/About';
import Service from './js/Service';
import Projects from './js/Projects';
import Page from './js/Page';
import Contact from './js/Contact';
import Home from './js/Home';
import Section1 from './js/Section1'
import Section2 from './js/Section2'
function App() {
  return (
    <>
    <Section1 />
    <Router>
    
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/project" element={<Projects />} />
        <Route path="/pages" element={<Page />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<h2>Page Not Found</h2>} />
      </Routes>
    </Router>
    <Section2 />
    </>
  );
}

export default App;
