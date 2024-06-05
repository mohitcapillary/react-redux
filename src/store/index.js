import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import countReducer from './reducer/counterReducer';
import userReducer from './reducer/userReducer';
import createSagaMiddleware from 'redux-saga';
import { watcherSaga } from './saga/dogSaga';
import { dogReducer } from './reducer/dogReducer';

const sagaMiddleware = createSagaMiddleware();
// dev tools middleware 
const reduxDevTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const RootReducer = combineReducers({
    counter: countReducer,
    user: userReducer,
    dog: dogReducer
});

const  store = createStore(RootReducer, compose(applyMiddleware(sagaMiddleware), reduxDevTools));

// run the saga
sagaMiddleware.run(watcherSaga);

export default store;

// rough commit checking for tag-cut