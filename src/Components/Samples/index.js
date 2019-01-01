import React from 'react';
import './stylesheet.css';

export default function Samples(props){

	return(
		<div className='samples'>
			<div className='samples-wrapper'>
				<div className='sample'>
					<img src={require('../../gifs/Fight_or_Fright.gif')} alt='Fight or Fright' />
					<p><b>Fight or Fright </b>
						Fight your way through endless levels of a haunted house! Browser
						based role playing game built in vanilla JavaScript, HTML and CSS.
					</p>
				</div>
				<div className='sample'>
					<img src={require('../../gifs/Karma_Farm.gif')} alt='Karma Farm' />
					<p><b>Karma Farm </b>
						A companion app for Reddit. Find the best times to post to your favorite
						subreddits for maximum karma! React front end with OAuth for logging in and
						posting to Reddit.
					</p>
				</div>
				<div className='sample'>
					<img src={require('../../gifs/Exquisite_Chronicle.gif')} alt='Exquisite Chronicle' />
					<p><b>Exquisite Chroncile </b>
						Collaborate on story telling with an exquisite corpse inspired writing app. React
						front end on a Node server built with Express. JSON Web Token authentication and a
						PostgreSQL database.
					</p>
				</div>
				<div className='sample'>
					<img src={require('../../gifs/Weather.gif')} alt='Weather App' />
					<p><b>Weather App </b>
						A simple app for checking the weather. React front end makes asynchronous API calls to retrieve
						weather data by zip code and retrieve animated gifs based on weather description.
					</p>
				</div>
			</div>
		</div>
	)
}
