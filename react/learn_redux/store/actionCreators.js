import {
  ADD_NUMBER,
  SUB_NUMBER,
  INCREMENT,
  DECREMENT
} from './constants.js';


export const addAction = num => ({
  type: ADD_NUMBER,
  num
})