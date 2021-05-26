import React from 'react';
import Style from './Navbar.style';

const Navbar = () => {
	return (
		<Style>
			<h3 className='logo'>Logo</h3>

			<div className='nav'>
				<h3 className='nav-item'>Home</h3>
				<h3 className='nav-item'>List</h3>
				<h3 className='nav-item'>Escalation</h3>
				<h3 className='nav-item'>Settings</h3>
				<h3 className='nav-item'>Account</h3>
			</div>
		</Style>
	);
};

export default Navbar;
