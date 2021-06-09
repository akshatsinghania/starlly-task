export const SET_ATTENDANCE = 'SET_ATTENDANCE';
export const GET_ATTENDANCE = 'GET_ATTENDANCE';
export const SET_ATTENDANCE_USER = 'SET_ATTENDANCE_USER';
export const SET_CURRENT_EDITING_CELL = 'SET_CURRENT_EDITING_CELL';
export const DELETE_USER_ATTENDANCE = 'DELETE_USER_ATTENDANCE';
export const RERENDER_GRAPH = 'RERENDER_GRAPH';

export const setAttendance = (changedData) => {
	return {
		type: SET_ATTENDANCE,
		payload: changedData,
	};
};
export const setAttendanceUser = (index, data) => {
	return {
		type: SET_ATTENDANCE_USER,
		payload: { index, data },
	};
};
export const setCurrentEditingCell = (index) => {
	return {
		type: SET_CURRENT_EDITING_CELL,
		payload: index,
	};
};
export const getAttendance = (data) => {
	return {
		type: GET_ATTENDANCE,
		payload: data,
	};
};
export const deleteUserAttendance = (index) => {
	return {
		type: DELETE_USER_ATTENDANCE,
		payload: index,
	};
};
export const reRenderGraph = () => {
	return {
		type: RERENDER_GRAPH,
	};
};
