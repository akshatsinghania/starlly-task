import React from 'react';
import { ActionWrapper } from './Action.style';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import { useDispatch, useSelector } from 'react-redux';
import {
	setCurrentEditingCell,
	deleteUserAttendance,
	reRenderGraph,
} from '../../../../../../redux/actions/Attendance';

const Action = ({ rowIndex }) => {
	const dispatch = useDispatch();
	const currentEditingCell = useSelector(
		(state) => state.attendance.currentEditingCell,
	);
	const setEditing = () => {
		dispatch(setCurrentEditingCell(rowIndex));
	};
	const refreshData = () => {};
	return (
		<ActionWrapper>
			<button className='button blue-button'>View more</button>
			<button className='button red-button'>Watch Live</button>
			<button className='button more-button gray-button'>
				More <KeyboardArrowDownIcon />
				<div className='more'>
					<button className='more__button gray-button' onClick={setEditing}>
						Edit
					</button>
					<button
						className='more__button gray-button'
						onClick={() => {
							dispatch(deleteUserAttendance(rowIndex));
						}}>
						Delete
					</button>
					<button onClick={refreshData} className='more__button gray-button'>
						Refresh Data
					</button>
				</div>
			</button>
		</ActionWrapper>
	);
};
export default Action;
