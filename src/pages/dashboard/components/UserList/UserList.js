import React, { useMemo, useState } from 'react';
import { UserListWrapper, UserActionWrapper } from './UserList.style';

import { useTable } from 'react-table';

//icons
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

const UserList = ({ data, cells = [] }) => {
	const columns = useMemo(
		() => [
			{
				Header: 'Camera Id',
				accessor: 'cameraId',
			},
			{
				Header: 'Officer Name',
				accessor: 'officerName',
			},
			{
				Header: 'Address',
				accessor: 'address',
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
				Cell: Action,
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
	} = useTable({ columns, data });

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
const Action = () => {
	return (
		<UserActionWrapper>
			<button className='button blue-button'>View more</button>
			<button className='button red-button'>Watch Live</button>
			<button className='button more-button gray-button'>
				More <KeyboardArrowDownIcon />
				<div className='more'>
					<button className='more__button gray-button'>Edit</button>
					<button className='more__button gray-button'>Delete</button>
					<button className='more__button gray-button'>Refresh Data</button>
				</div>
			</button>
		</UserActionWrapper>
	);
};
export default UserList;
