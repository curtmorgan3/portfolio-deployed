import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import './stylesheet.css';

function NavBar(props){

	return(
		<Navbar fixedTop='true' className='navbar' inverse='true' collapseOnSelect='true'>
			<Navbar.Header>
				<Navbar.Toggle />
			</Navbar.Header>
			<Navbar.Collapse className='nav'>
				<Nav pullRight='true'>
				<NavItem className='nav-item'
								 onClick={() => props.setView('main')}
				>
					Home
				</NavItem>
					<NavItem className='nav-item'
									 onClick={() => props.setView('samples')}
					>
						Samples
					</NavItem>
					<NavItem className='nav-item'
									 onClick={() => props.setView('technologies')}
					>
						Technologies
					</NavItem>
					<NavItem className='nav-item'
									 onClick={() => window.open('https://drive.google.com/file/d/1b8DiTmHTDTpqSdHGbV4M4YkWaOHINeEH/view?usp=sharing', '_blank')}
					>
						Resume
					</NavItem>
					<NavItem className='nav-item'
									 onClick={() => window.open('https://www.linkedin.com/in/curtmorgan3/', '_blank')}
					>
						LinkedIn
					</NavItem>
					<NavItem className='nav-item'
									 onClick={() => window.open('https://github.com/curtmorgan3', '_blank')}
					>
						GitHub
					</NavItem>
					<NavItem className='nav-item'
									 onClick={() => props.setView('contact')}
					>
						Contact
					</NavItem>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	)
};

export {
	NavBar
}
