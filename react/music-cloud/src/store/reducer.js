import { combineReducers } from 'redux-immutable';
import appReducer from './app/index'

const cReducer = combineReducers({
  app: appReducer
})

export default cReducer;