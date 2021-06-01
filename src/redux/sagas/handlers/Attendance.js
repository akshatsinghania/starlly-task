import { call, put } from 'redux-saga/effects';
import * as api from '../requests/Attendance';
import { SET_ATTENDANCE } from '../../actions/Attendance';

export function* getAttendance(action) {
	try {
		const data = yield call(api.getAttendance, action.payload);
		console.log(data);
		yield put(SET_ATTENDANCE, data);
	} catch (error) {
		throw error;
	}
}
