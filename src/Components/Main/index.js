import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import ParticleWrapper from '../ParticlesWrapper';
import Typed from 'react-typed';
import './stylesheet.css';


export default class Main extends React.Component{


	render(){
		return(
			<div>
					<Jumbotron className='main-wrap'>
						<h1><Typed strings={['Curt Morgan']} typeSpeed={75}></Typed></h1>
						<h3><Typed strings={['Full Stack Web Developer', 'Computer Science Enthuiast',
																	'Distance Runner', 'Sci-Fi Fan', 'New Yorker'
																]}
						loop startDelay={2000} typeSpeed={60}/></h3>

						<h4 className='fade-in'>Web apps from start to finish.</h4>
						<h5 className='fade-in' onClick={()=> this.props.setView('samples')}>See My Work</h5>
					</Jumbotron>

				<ParticleWrapper />
			</div>
		)
	}

};
