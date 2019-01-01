import React from 'react';
import './stylesheet.css';

export default function Technologies(props){

	return(
		<div className='technologies'>
			<div className='tech-wrapper'>
				<h3>Technologies</h3>
				<div className='user-interface'>
					<h4><u><b>User Interface</b></u></h4>
					<p>React</p>
					<p>Asyncronous AJAX</p>
					<p>API Integration</p>
				</div>
				<div className='servers'>
					<h4><u><b>Servers</b></u></h4>
					<p>Node.js with Express.js</p>
					<p>Ruby on Rails</p>
				</div>
				<div className='database'>
					<h4><u><b>Database</b></u></h4>
					<p>Sequelize</p>
					<p>Active Record</p>
					<p>PostgreSQL</p>
				</div>
				<div className='languages'>
					<h4><u><b>Language</b></u></h4>
					<p>JavaScript (ES6)</p>
					<p>Ruby</p>
					<p>HTML 5 | CSS 3</p>
					<p>SQL</p>
				</div>
				<p><a href='https://github.com/curtmorgan3/portfolio'>See the code for this site</a></p>
			</div>
		</div>
	)
}
