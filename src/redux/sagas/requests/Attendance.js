import axios from 'axios';

export const getAttendance = (data) => {
	return axios.post('https://reqres.in/api/attendance', data);
};
