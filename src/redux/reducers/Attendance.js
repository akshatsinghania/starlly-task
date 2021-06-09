import {
	SET_CURRENT_EDITING_CELL,
	SET_ATTENDANCE,
	SET_ATTENDANCE_USER,
	DELETE_USER_ATTENDANCE,
	RERENDER_GRAPH,
} from '../actions/Attendance';

const randomStatus = () => {
	var array = [];
	var i = 0;
	while (i < 21) {
		array.push({
			time: Math.floor(Math.random() * 100000000),
			value: Math.floor(Math.random() * 100),
		});
		i++;
	}
	return array;
};
console.log({ status: randomStatus() });
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
			status: randomStatus(),
		},
		{
			cameraId: '002',
			officerName: 'John doe 2',
			attendance: 65,
			address: `Theodore Lowe
            Ap #867-859 Sit Rd.
            Azusa New York 39531
            (793) 151-6230`,
			status: randomStatus(),
		},
		{
			cameraId: '002',
			officerName: 'John doe 211',
			attendance: 65,
			address: `Theodore Lowe
            Ap #867-859 Sit Rd.
            Azusa New York 39531
            (793) 151-6230`,
			status: randomStatus(),
		},
		{
			cameraId: '002',
			officerName: 'John doe X',
			attendance: 65,
			address: `Theodore Lowe
            Ap #867-859 Sit Rd.
            Azusa New York 39531
            (793) 151-6230`,
			status: randomStatus(),
		},
		{
			cameraId: '002',
			officerName: 'John doe y',
			attendance: 65,
			address: `Theodore Lowe
            Ap #867-859 Sit Rd.
            Azusa New York 39531
            (793) 151-6230`,
			status: randomStatus(),
		},
		{
			cameraId: '002',
			officerName: 'John doe X',
			attendance: 65,
			address: `Theodore Lowe
            Ap #867-859 Sit Rd.
            Azusa New York 39531
            (793) 151-6230`,
			status: randomStatus(),
		},
		{
			cameraId: '002',
			officerName: 'John doe X',
			attendance: 65,
			address: `Theodore Lowe
            Ap #867-859 Sit Rd.
            Azusa New York 39531
            (793) 151-6230`,
			status: randomStatus(),
		},
		{
			cameraId: '002',
			officerName: 'John doe X',
			attendance: 65,
			address: `Theodore Lowe
            Ap #867-859 Sit Rd.
            Azusa New York 39531
            (793) 151-6230`,
			status: randomStatus(),
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
			var newAttendance = [...state.data];
			newAttendance[action.payload.index] = action.payload.data;
			return { ...state, data: newAttendance };
		case DELETE_USER_ATTENDANCE:
			var newData = [...state.data];
			newData.splice(action.payload, 1);
			return { ...state, data: [...newData] };
		case RERENDER_GRAPH:
			return { ...state, reRender: !state.reRender };

		default:
			return state;
	}
};
export default AttendanceReducer;
