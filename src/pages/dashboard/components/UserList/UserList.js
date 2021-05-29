import React, { useEffect, useMemo, useState } from 'react';
import { UserListWrapper } from './UserList.style';
import { useTable } from 'react-table';
import { useDispatch, useSelector } from 'react-redux';
import {
	getAttendance,
	setAttendance,
} from '../../../../redux/actions/Attendance';
import Action from './components/action/Action';
import EditableCell from './components/editableCell/EditableCell';

const UserList = () => {
	const attendanceData = useSelector((state) => state.attendance);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getAttendance());
	}, [dispatch]);

	const columns = useMemo(
		() => [
			{
				Header: 'Camera Id',
				accessor: 'cameraId',
				Cell: (data) => <EditableCell data={data} />,
			},
			{
				Header: 'Officer Name',
				accessor: 'officerName',
				Cell: (data) => <EditableCell data={data} />,
			},
			{
				Header: 'Address',
				accessor: 'address',
				Cell: (data) => <EditableCell data={data} />,
			},
			{
				Header: 'Attendance',
				accessor: 'attendance',
				Cell: ({ row: { original } }) => <div>{original.attendance}%</div>,
			},
			{
				Header: 'Status',
				accessor: 'status',
				Cell: ({ row: { original } }) => original.status[0].value,
			},
			{
				Header: 'Action',
				accessor: 'action',
				Cell: (data) => <Action rowIndex={data.row.index} />,
			},
		],
		[],
	);
	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		rows,
		prepareRow,
	} = useTable({ columns, data: attendanceData.data });

	return (
		<UserListWrapper>
			<table {...getTableProps()} className='userList'>
				<thead>
					{headerGroups.map((headerGroup) => (
						<tr {...headerGroup.getHeaderGroupProps()}>
							{headerGroup.headers.map((column) => (
								<th {...column.getHeaderProps()}>{column.render('Header')}</th>
							))}
						</tr>
					))}
				</thead>
				<tbody {...getTableBodyProps()}>
					{rows.map((row) => {
						prepareRow(row);
						return (
							<tr {...row.getRowProps()}>
								{row.cells.map((cell) => {
									return (
										<td {...cell.getCellProps()}>{cell.render('Cell')}</td>
									);
								})}
							</tr>
						);
					})}
				</tbody>
			</table>
		</UserListWrapper>
	);
};

export default UserList;
