import React from 'react';
import { DashboardWrapper } from './Dashboard.style';
import Table from './components/UserList/UserList';

const Dashboard = () => {
	return (
		<DashboardWrapper>
			<h1>User List</h1>
			<Table />
		</DashboardWrapper>
	);
};

export default Dashboard;
