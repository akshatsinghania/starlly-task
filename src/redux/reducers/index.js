import { combineReducers } from 'redux';

//reducers
import attendanceReducer from './Attendance';

export default combineReducers({
	attendance: attendanceReducer,
});
