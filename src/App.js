import React from 'react';

import Main from './sections/Main';
import About from './sections/About';
import Work from './sections/Work';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import Sidebar from './components/Sidebar';

import 'normalize.css';
import './App.css';
import './css/menu.css';

function App() {
  return (
    <div className="App">
      <div className='wrapper'>
        <Main />
        <About />
        <Work />
        <Contact />
        <Footer />
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
