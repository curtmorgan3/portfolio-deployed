import React, { Component } from 'react';
import './App.css';
import {NavBar} from './Components/NavBar';
import Main from './Components/Main';
import Technologies from './Components/technologies';
import Contact from './Components/Contact';
import Samples from './Components/Samples';
import './App.css';

class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			currentView: '',
		}
		this.setView = this.setView.bind(this);
	}

	setView(view){
		this.setState({
			currentView: view,
		})
	}
	viewController(){
		switch(this.state.currentView){
			case 'main':
			return <Main setView={this.setView}/>
			case 'technologies':
			return <Technologies />
			case 'contact':
			return <Contact />
			case 'samples':
			return <Samples />
			default :
			return <Main setView={this.setView}/>
		}
	}
  render() {
    return (
      <div className="App">
				<NavBar setView={this.setView}/>
				{this.viewController()}
      </div>
    );
  }
}

export default App;
