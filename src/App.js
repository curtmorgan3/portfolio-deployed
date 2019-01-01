import React, { Component } from 'react';
import './App.css';
import {NavBar} from './Components/NavBar';
import Footer from './Components/Footer';
import Main from './Components/Main';
import Technologies from './Components/Technologies';
import Contact from './Components/Contact';

class App extends Component {
  render() {
    return (
      <div className="App">
				<NavBar />
				<Contact />
      </div>
    );
  }
}

export default App;
