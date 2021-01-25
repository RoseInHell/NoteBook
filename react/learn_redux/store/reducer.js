import {
  ADD_NUMBER,
  SUB_NUMBER,
  INCREMENT,
  DECREMENT
} from './constants.js';


const defaultState = {
  counter: 0
}

function reducer(state, action) {
  switch(action.type) {
    case ADD_NUMBER:
      return {...state, conter:state.counter + action.num}
  }
}


export default reducer;