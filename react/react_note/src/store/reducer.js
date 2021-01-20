import { ADD_NUMBER } from './constants';

const initialState = {
  counter: 0
}

function reducer(state = initialState, action) {
  switch(action.type) {
    case ADD_NUMBER:
      return {...state, counter: state.counter + action.num};
    default:
      return state;
  }
}

export default reducer;