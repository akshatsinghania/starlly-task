import { takeEvery } from 'redux-saga/effects';
import { GET_ATTENDANCE } from '../actions/Attendance';

//handlers
import { getAttendance } from './handlers/Attendance';

function* Watcher() {
	yield takeEvery(GET_ATTENDANCE, getAttendance);
}
export default Watcher;
