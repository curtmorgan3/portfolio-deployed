import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import './stylesheet.css';

export default function Main(props){

	return(
		<div className='main'>
				<Jumbotron className='main-wrap'>
					<h1 className='slide-in-right'>Curt Morgan</h1>
					<h3 className='slide-in-left'>Full Stack Web Developer</h3>
					<h4 className='slide-in-left'>Web apps from start to finish.</h4>
					<h5 className='fade-in' onClick={()=> props.setView('samples')}>See My Work</h5>
				</Jumbotron>
		</div>
	)
};
