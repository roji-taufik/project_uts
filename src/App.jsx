// App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePages from './pages/HomePages';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  return (
    <div>
      <Navbar />
      <HomePages />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
