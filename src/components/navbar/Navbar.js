import React from 'react';
import Style from './Navbar.style';

//icons
import HomeIcon from '@material-ui/icons/Home';
import ListIcon from '@material-ui/icons/List';
import RvHookupIcon from '@material-ui/icons/RvHookup';
import SettingsIcon from '@material-ui/icons/Settings';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const Navbar = () => {
	return (
		<Style>
			<h3 className='logo'>Logo</h3>

			<div className='nav'>
				<div className='nav-itemContainer'>
					<HomeIcon />
					<h3 className='nav-item'>Home</h3>
				</div>
				<div className='nav-itemContainer'>
					<ListIcon />
					<h3 className='nav-item'>List</h3>
				</div>
				<div className='nav-itemContainer'>
					<RvHookupIcon />
					<h3 className='nav-item'>Escalation</h3>
				</div>
				<div className='nav-itemContainer'>
					<SettingsIcon />
					<h3 className='nav-item'>Settings</h3>
				</div>
				<div className='nav-itemContainer'>
					<AccountCircleIcon />
					<h3 className='nav-item'>Account</h3>
				</div>
			</div>
		</Style>
	);
};

export default Navbar;
