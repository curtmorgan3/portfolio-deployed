import React, { Component } from 'react';
import './App.css';
import {NavBar} from './Components/NavBar';
import Footer from './Components/Footer';
import Main from './Components/Main';
import Technologies from './Components/Technologies';
import Contact from './Components/Contact';
import Samples from './Components/Samples';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
				<NavBar />
				<Samples />
      </div>
    );
  }
}

export default App;
