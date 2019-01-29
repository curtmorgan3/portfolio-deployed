import React from 'react';
import './stylesheet.css';

export default function Samples(props){

	return(
		<div className='samples'>
			<div className='samples-wrapper'>
				<div className='sample'>
					<img src={require('../../gifs/Karma_Farm.gif')} alt='Karma Farm' />
					<p><b><a href='https://mykarma-farm.surge.sh' className='sample-link' target='_blank'>Karma Farm</a></b>
						A companion app for Reddit. Find the best times to post to your favorite
						subreddits for maximum karma! React front end with OAuth for logging in and
						posting to Reddit.
					</p>
				</div>
				<div className='sample'>
					<img src={require('../../gifs/Table_Top.gif')} alt='Table Top Companion' />
					<p><b><a href='https://tabletopcompanion.herokuapp.com' className='sample-link' target='_blank'>Table Top Companion</a></b>
						Focus on the creativity of Dungeons and Dragons and let the Table Top Companion handle the business.
						Full stack app built with React, Ruby on Rails, JSON Web Token authorization
						and a PostgreSQL database.
					</p>
				</div>
				<div className='sample'>
					<img src={require('../../gifs/Fight_or_Fright.gif')} alt='Fight or Fright' />
					<p><b><a href='https://possible-guitar.surge.sh/' target='_blank' className='sample-link'>Fight or Fright</a></b>
						Fight your way through endless levels of a haunted house! Browser
						based role playing game built in vanilla JavaScript, HTML and CSS.
					</p>
				</div>
				<div className='sample'>
					<img src={require('../../gifs/Weather.gif')} alt='Weather App' />
					<p><b><a href='https://mindless-feast.surge.sh' target='_blank' className='sample-link'>Weather App</a></b>
						A simple app for checking the weather. React front end makes asynchronous API calls to retrieve
						weather data by zip code and retrieve animated gifs based on weather description.
					</p>
				</div>
				<div className='sample'>
					<img src={require('../../gifs/Exquisite_Chronicle.gif')} alt='Exquisite Chronicle' />
					<p><b><a href='https://exquisite-chronicle.surge.sh/' target='_blank' className='sample-link'>Exquisite Chronicle</a></b>
						Collaborate on story telling with an exquisite corpse inspired writing app. React
						front end on a Node server built with Express. JSON Web Token authentication and a
						PostgreSQL database.
					</p>
				</div>
				<div className='sample-last'>
					<p><a href='https://github.com/curtmorgan3/portfolio' target='_blank'>See the code for this site</a></p>
				</div>
			</div>
		</div>
	)
}
