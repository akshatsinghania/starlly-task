import { call, put } from 'redux-saga';
import * as api from '../requests/Attendance';
import { GET_ATTENDANCE } from '../../actions/Attendance';

export function* getAttendance(action) {
	try {
		const { data } = yield call(api.getAttendance, action.payload);
		yield put(GET_ATTENDANCE, data);
	} catch (error) {
		throw error;
	}
}
