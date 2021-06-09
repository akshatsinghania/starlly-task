import React, { useEffect } from 'react';
import { DashboardWrapper } from './Dashboard.style';
import Table from './components/UserList/UserList';
import CameraAnalysis from './components/CameraAnalysis/CameraAnalysis';
import { useDispatch, useSelector } from 'react-redux';
import { getAttendance } from '../../redux/actions/Attendance';

const Dashboard = () => {
	const dispatch = useDispatch();
	const attendanceData = useSelector((state) => state.attendance.data);

	useEffect(() => {
		dispatch(getAttendance(attendanceData));
	}, [getAttendance]);
	return (
		<DashboardWrapper>
			<h1>Camera Analysis</h1>
			<CameraAnalysis />
			<h1>User List</h1>
			<Table />
		</DashboardWrapper>
	);
};

export default Dashboard;
