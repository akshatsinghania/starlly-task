import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers';

const middleware = [];

const store =
	process.env.NODE_ENV === 'production'
		? createStore(reducers)
		: createStore(
				reducers,
				window.__REDUX_DEVTOOLS_EXTENSION__ &&
					window.__REDUX_DEVTOOLS_EXTENSION__(),
		  );

export default store;
