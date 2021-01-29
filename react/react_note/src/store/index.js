import { createStore, applyMiddleware } from 'redux';

import thunkMiddleware from 'redux-thunk';

import createSaga from 'redux-saga';

import reducer from './reducer';

const sagaMiddleware = createSaga();

const storeenhancer =  applyMiddleware(thunkMiddleware,sagaMiddleware);



const store = createStore(reducer, storeenhancer);

sagaMiddleware.run()

export default store;