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
};
const AttendanceReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'SET_DATA':
			var newData = state.data;
			newData[newData.findIndex((el) => el.id === action.payload.id)] =
				action.payload;
			return { data: newData };
		default:
			return state;
	}
};
export default AttendanceReducer;
