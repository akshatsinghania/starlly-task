import React, { useMemo, useState } from 'react';
import { UserListWrapper, UserActionWrapper } from './UserList.style';

import { useTable } from 'react-table';

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
	const [dropdownOpen, setDropdownOpen] = useState(false);
	return (
		<UserActionWrapper>
			<button className='button blue-button'>View more</button>
			<button className='button red-button'>Watch Live</button>
			<button
				className='button gray-button'
				onclick={() => setDropdownOpen(!dropdownOpen)}>
				Watch Live
			</button>
			{dropdownOpen ? (
				<div>
					<button>Edit</button>
					<button>Delete</button>
				</div>
			) : null}
		</UserActionWrapper>
	);
};
export default UserList;
