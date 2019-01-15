import React from 'react';
import { Carousel } from 'react-bootstrap';
import './stylesheet.css';

export default function Technologies(props){



	return(
		<div className='tech-carousel'>
			<Carousel>
				<Carousel.Item>
					<h3>React | Asyncronous AJAX | API Calls | CSS Frameworks</h3>
					<img className='carousel-image' alt="ReactJS" src={require("../../images/react.png")}/>
					<Carousel.Caption>
						<h4>User Interface</h4>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<h3>JavaScript | HTML 5 | CSS 3 | Ruby</h3>
					<img className='carousel-image' alt="JavaScript HTML 5 CSS 3" src={require("../../images/frontend.png")}/>
					<img className='carousel-image' alt="Ruby" src={require("../../images/ruby.png")}/>
					<Carousel.Caption>
						<h4>Languages</h4>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<h3>NodeJS | Express | Rails</h3>
					<img className='carousel-image' alt="Node" src={require("../../images/nodejs.png")}/>
					<img className='carousel-image' alt="Rails" src={require("../../images/rails.png")}/>
					<Carousel.Caption>
						<h4>Servers</h4>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<h3>PostgreSQL | Sequelize | Active Record</h3>
					<img className='carousel-image' alt="PostgreSQL" src={require("../../images/postgresql.png")}/>
					<Carousel.Caption>
						<h4>Database</h4>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
		</div>
	)
}
