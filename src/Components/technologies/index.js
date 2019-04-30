import React from 'react';
import Tree from './Tree.js';
import './stylesheet.css';

export default class Technologies extends React.Component{



	render(){
		return(
			<div className='technologies-page'>

				<div className='tech-tree'>
					<Tree />
				</div>

			</div>
		)
	}

}
