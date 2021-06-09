import {
	SET_CURRENT_EDITING_CELL,
	SET_ATTENDANCE,
	SET_ATTENDANCE_USER,
	DELETE_USER_ATTENDANCE,
	RERENDER_GRAPH,
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
				{ time: 1621255200000, value: 23 },
				{ time: 1621215200000, value: 32 },
				{ time: 1621615200000, value: 25 },
				{ time: 1623615100000, value: 10 },
			],
		},
		{
			cameraId: '002',
			officerName: 'John doe 2',
			attendance: 65,
			address: `Theodore Lowe
            Ap #867-859 Sit Rd.
            Azusa New York 39531
            (793) 151-6230`,
			status: [
				{ time: 1622365200000, value: 59 },
				{ time: 1622355200000, value: 18 },
				{ time: 1621255200000, value: 23 },
				{ time: 1621215200000, value: 10 },
				{ time: 1621615200000, value: 25 },
				{ time: 1623615100000, value: 10 },
			],
		},
		{
			cameraId: '002',
			officerName: 'John doe 211',
			attendance: 65,
			address: `Theodore Lowe
            Ap #867-859 Sit Rd.
            Azusa New York 39531
            (793) 151-6230`,
			status: [
				{ time: 1622365200000, value: 59 },
				{ time: 1622355200000, value: 18 },
				{ time: 1621255200000, value: 23 },
				{ time: 1621215200000, value: 32 },
				{ time: 1621615200000, value: 75 },
			],
		},
		{
			cameraId: '002',
			officerName: 'John doe X',
			attendance: 65,
			address: `Theodore Lowe
            Ap #867-859 Sit Rd.
            Azusa New York 39531
            (793) 151-6230`,
			status: [
				{ time: 1622365200000, value: 59 },
				{ time: 1622355200000, value: 18 },
				{ time: 1621255200000, value: 23 },
				{ time: 1621215200000, value: 66 },

				{ time: 1623615100000, value: 10 },
			],
		},
		{
			cameraId: '002',
			officerName: 'John doe y',
			attendance: 65,
			address: `Theodore Lowe
            Ap #867-859 Sit Rd.
            Azusa New York 39531
            (793) 151-6230`,
			status: [
				{ time: 1622365200000, value: 59 },
				{ time: 1622355200000, value: 18 },
				{ time: 1621255200000, value: 23 },
				{ time: 1621215200000, value: 80 },

				{ time: 1623615100000, value: 17 },
			],
		},
		{
			cameraId: '002',
			officerName: 'John doe X',
			attendance: 65,
			address: `Theodore Lowe
            Ap #867-859 Sit Rd.
            Azusa New York 39531
            (793) 151-6230`,
			status: [
				{ time: 1622365200000, value: 59 },

				{ time: 1621255200000, value: 18 },
				{ time: 1621215200000, value: 32 },
				{ time: 1621615200000, value: 25 },
				{ time: 1623615100000, value: 18 },
			],
		},
	],
	currentEditingCell: false,
	reRender: false,
};
const AttendanceReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_CURRENT_EDITING_CELL:
			return { ...state, currentEditingCell: action.payload };
		case SET_ATTENDANCE:
			return { ...state, data: action.payload };
		case SET_ATTENDANCE_USER:
			console.log('set');
			var newAttendance = state.data;
			newAttendance[action.payload.index] = action.payload.data;
			return { ...state, data: newAttendance };
		case DELETE_USER_ATTENDANCE:
			var newData = state.data;
			newData.splice(action.payload, 1);

			return { ...state, data: [...newData] };
		case RERENDER_GRAPH:
			console.log(state);
			return { ...state, reRender: !state.reRender };

		default:
			return state;
	}
};
export default AttendanceReducer;
