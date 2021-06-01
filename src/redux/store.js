import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers';

import createSagaMiddleware from 'redux-saga';
import Watcher from './sagas/Watcher';

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

const store =
	process.env.NODE_ENV === 'production'
		? createStore(reducers, applyMiddleware(...middleware))
		: createStore(
				reducers,
				compose(
					applyMiddleware(...middleware),
					window.__REDUX_DEVTOOLS_EXTENSION__ &&
						window.__REDUX_DEVTOOLS_EXTENSION__(),
				),
		  );
sagaMiddleware.run(Watcher);
export default store;
