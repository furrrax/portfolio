import React from 'react';
import logo from './logo.svg';
import './App.css';

import Main from './sections/Main';
import About from './sections/About';
import Work from './sections/Work';
import Contact from './sections/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <div className='wrapper'>
        <Main />
        <About />
        <Work />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
