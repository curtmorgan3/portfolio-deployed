import React from 'react';
import './stylesheet.css';

export default function Samples(props){

	return(
		<div className='samples'>
			<div className='samples-wrapper'>
				<div className='sample'>
					<img src={require('../../gifs/higher_grounds.gif')} alt='Magic the Gathering example' />
					<p><b>Wizards of the Coast </b>
						If you're a Magic the Gathering player, you may have received this in your email inbox. The glowing radial animations are made with
						SVG's and display the player's current stats. 
					</p>
				</div>
				<div className='sample'>
					<img src={require('../../gifs/higher_grounds.gif')} alt='New York Road Runners example' />
					<p><b>New York Road Runners </b>
						Runners of the NY Marathon in 2019 were treated to this post run email with their race stats, complete with a gif of their 
						route. 
					</p>
				</div>
				<div className='sample'>
					<img src={require('../../gifs/higher_grounds.gif')} alt='Southwest Airlines example' />
					<p><b>Southwest Airlines </b>
						Frequent fliers love tracking their points and miles. I made it more fun for Southwest fliers by animating their progress
						emails. 
					</p>
				</div>
				<div className='sample'>
					<img src={require('../../gifs/higher_grounds.gif')} alt='' />
					<p><b>Higher Grounds Astoria </b>
						A web application for a local Queens coffee shop. React front end that makes asynchronous AJAX calls to the
						Shopify API.
					</p>
				</div>
				<div className='sample'>
					<img src={require('../../gifs/Karma_Farm.gif')} alt='Karma Farm' />
					<p><b><a href='https://mykarma-farm.surge.sh' rel="noopener noreferrer" className='sample-link' target='_blank'>Karma Farm</a></b>
						A companion app for Reddit. Find the best times to post to your favorite
						subreddits for maximum karma! React front end with OAuth for logging in and
						posting to Reddit.
					</p>
				</div>
				<div className='sample'>
					<img src={require('../../gifs/Table_Top.gif')} alt='Table Top Companion' />
					<p><b><a href='https://tabletopcompanion.herokuapp.com' rel="noopener noreferrer" className='sample-link' target='_blank'>Table Top Companion</a></b>
						Focus on the creativity of Dungeons and Dragons and let the Table Top Companion handle the business.
						Full stack app built with React, Ruby on Rails, JSON Web Token authorization
						and a PostgreSQL database.
					</p>
				</div>
				<div className='sample'>
					<img src={require('../../gifs/Fight_or_Fright.gif')} alt='Fight or Fright' />
					<p><b><a href='https://fight-orfright.surge.sh/' rel="noopener noreferrer" target='_blank' className='sample-link'>Fight or Fright</a></b>
						Fight your way through endless levels of a haunted house! Browser
						based role playing game built in vanilla JavaScript, HTML and CSS. It's way too difficult.
					</p>
				</div>

				<div className='sample-last'>
					<p><a href='https://github.com/curtmorgan3/portfolio-deployed' rel="noopener noreferrer" target='_blank'>Check out the code for this site</a></p>
				</div>
			</div>
		</div>
	)
}
