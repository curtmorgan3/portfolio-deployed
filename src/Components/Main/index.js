import React from 'react';
import './stylesheet.css';

export default function Main(props){

	return(
		<div className='main'>
			<div className='main-wrap'>
				<h2>Full Stack Web Developer</h2>
				<h4>Web apps from start to finish.</h4>
				<h4>Style | Function | Scale</h4>
			</div>
			<p onClick={()=> props.setView('samples')}>See My Work</p>
		</div>
	)
};
