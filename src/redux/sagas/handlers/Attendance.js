import { call, put } from 'redux-saga/effects';
import * as api from '../requests/Attendance';
import { SET_ATTENDANCE } from '../../actions/Attendance';

export function* getAttendance(action) {
	try {
		const data = yield call(api.getAttendance, action.payload);
		const attendanceData = data.data;

		yield put({ type: SET_ATTENDANCE, payload: attendanceData });
	} catch (error) {
		throw error;
	}
}
