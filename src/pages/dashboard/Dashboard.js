import React, { useEffect, useMemo, useState } from 'react';
import { DashboardWrapper } from './Dashboard.style';
import axios from 'axios';
import Table from './components/UserList/UserList';

//redux
import { useSelector } from 'react-redux';

const Dashboard = () => {
	const attendanceData = useSelector((state) => state.attendance.data);

	useEffect(() => {
		// axios.post('https://reqres.in/api/users', attendanceData).then((res) => {
		// 	setAttendanceData(res.data);
		// });
		// return () => {
		// 	setAttendanceData([]);
		// };
	}, []);
	return (
		<DashboardWrapper>
			<h1>User List</h1>
			<Table data={attendanceData} />
		</DashboardWrapper>
	);
};

export default Dashboard;
