import React, { useEffect, useMemo, useState } from 'react';
import { DashboardWrapper } from './Dashboard.style';
import axios from 'axios';
import Table from './components/UserList/UserList';

const Dashboard = () => {
	const [attendanceData, setAttendanceData] = useState([
		{
			cameraId: '001',
			officerName: 'John doe',
			attendance: 98,
			address: `Theodore Lowe
			Ap #867-859 Sit Rd.
			Azusa New York 39531
			(793) 151-6230`,
			status: [
				{ time: 9, value: 100 },
				{ time: 10, value: 80 },
			],
		},
		{
			cameraId: '001',
			officerName: 'John doe',
			attendance: 98,
			address: `Theodore Lowe
			Ap #867-859 Sit Rd.
			Azusa New York 39531
			(793) 151-6230`,
			status: [
				{ time: 9, value: 100 },
				{ time: 10, value: 80 },
			],
		},
		{
			cameraId: '001',
			officerName: 'John doe',
			attendance: 98,
			address: `Theodore Lowe
			Ap #867-859 Sit Rd.
			Azusa New York 39531
			(793) 151-6230`,
			status: [
				{ time: 9, value: 100 },
				{ time: 10, value: 80 },
			],
		},
		{
			cameraId: '001',
			officerName: 'John doe',
			attendance: 98,
			address: `Theodore Lowe
			Ap #867-859 Sit Rd.
			Azusa New York 39531
			(793) 151-6230`,
			status: [
				{ time: 9, value: 100 },
				{ time: 10, value: 80 },
			],
		},
	]);

	useEffect(() => {
		axios.post('https://reqres.in/api/users', attendanceData).then((res) => {
			setAttendanceData(res.data);
		});
		return () => {
			setAttendanceData([]);
		};
	}, []);
	return (
		<DashboardWrapper>
			<h1>User List</h1>
			<Table data={attendanceData} />
		</DashboardWrapper>
	);
};

export default Dashboard;
