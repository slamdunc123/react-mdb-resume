import React, { useState } from 'react';
import {
	MDBNavbar,
	MDBNavbarBrand,
	MDBNavbarNav,
	MDBNavItem,
	MDBNavLink,
	MDBNavbarToggler,
	MDBCollapse,
} from 'mdbreact';

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleCollapse = () => {
		setIsOpen(!isOpen);
	};

	return (
		<MDBNavbar color='elegant-color' dark expand='md'>
			<MDBNavbarBrand>
				<strong className='white-text'>My Resume</strong>
			</MDBNavbarBrand>
			<MDBNavbarToggler onClick={toggleCollapse} />
			<MDBCollapse id='navbarCollapse3' isOpen={isOpen} navbar>
				<MDBNavbarNav right>
					<MDBNavItem>
						<MDBNavLink to='/' onClick={isOpen && toggleCollapse}>
							Home
						</MDBNavLink>
					</MDBNavItem>
					<MDBNavItem>
						<MDBNavLink
							to='/about'
							onClick={isOpen && toggleCollapse}
						>
							About
						</MDBNavLink>
					</MDBNavItem>
					<MDBNavItem>
						<MDBNavLink
							to='/contact'
							onClick={isOpen && toggleCollapse}
						>
							Contact
						</MDBNavLink>
					</MDBNavItem>
					<MDBNavItem>
						<MDBNavLink
							to='/examples'
							onClick={isOpen && toggleCollapse}
						>
							Examples
						</MDBNavLink>
					</MDBNavItem>
				</MDBNavbarNav>
			</MDBCollapse>
		</MDBNavbar>
	);
};

export default Navbar;
