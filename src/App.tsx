import React from 'react';
import Navbar from './components/Navbar'
import Home from './components/Home'
import Resources from './components/Resources'
import Footer from './components/Footer'
import {Switch, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Navbar />
      <h1>Welcome to the Coping Skills Generator</h1>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/resources'>
          <Resources />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
