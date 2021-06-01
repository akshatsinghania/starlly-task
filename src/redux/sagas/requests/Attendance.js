import axios from 'axios';

export const getAttendance = (data) => {
	return axios.get('https://reqres.in/api/products/3', {
		data,
	});
};
