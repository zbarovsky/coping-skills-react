import React from 'react';
import Navbar from './components/Navbar'
import CopingSkill from './components/CopingSkill'
import Resources from './components/Resources'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Navbar />
      <h1>Welcome to the Coping Skills Generator</h1>
      <CopingSkill />
      <Footer />
    </div>
  );
}

export default App;
