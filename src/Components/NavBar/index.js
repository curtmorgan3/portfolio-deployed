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
					<NavItem className='nav-item' >
						Samples
					</NavItem>
					<NavItem className='nav-item' >
						Technologies
					</NavItem>
					<NavItem className='nav-item' >
						Resume
					</NavItem>
					<NavItem className='nav-item' >
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
