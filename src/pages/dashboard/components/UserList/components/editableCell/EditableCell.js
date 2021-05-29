import React, { useState } from 'react';
import { EditableCellWrapper } from './EditableCell.style';
import { useDispatch, useSelector } from 'react-redux';
import { setAttendanceUser } from '../../../../../../redux/actions/Attendance';

const EditableCell = ({ data }) => {
	const currentEditingCell = useSelector(
		(s) => s.attendance.currentEditingCell,
	);
	const cellData = useSelector(
		(s) => s.attendance.data[data.row.index][data.cell.column.id],
	);
	const dispatch = useDispatch();

	const changeCellData = (value) => {
		dispatch(
			setAttendanceUser(data.row.index, {
				...data.row.original,
				[data.cell.column.id]: value,
			}),
		);
	};

	return (
		<EditableCellWrapper>
			{data.row.index === currentEditingCell ? (
				<input
					className='input'
					value={cellData}
					onChange={(e) => changeCellData(e.target.value)}
				/>
			) : (
				<span>{cellData}</span>
			)}
		</EditableCellWrapper>
	);
};
export default EditableCell;
