import {
	SET_CURRENT_EDITING_CELL,
	SET_ATTENDANCE,
	SET_ATTENDANCE_USER,
	DELETE_USER_ATTENDANCE,
} from '../actions/Attendance';

const initialState = {
	data: [
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
	],
	currentEditingCell: false,
};
const AttendanceReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_CURRENT_EDITING_CELL:
			return { ...state, currentEditingCell: action.payload };
		case SET_ATTENDANCE:
			return { ...state, data: action.payload };
		case SET_ATTENDANCE_USER:
			var newAttendance = state.data;
			newAttendance[action.payload.index] = action.payload.data;
			return { ...state, data: newAttendance };
		case DELETE_USER_ATTENDANCE:
			var newData = state.data;
			newData.splice(action.payload, 1);

			return { ...state, data: [...newData] };

		default:
			return state;
	}
};
export default AttendanceReducer;
