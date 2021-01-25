const redux = require('redux');

const initialState = {
  counter: 0
}

function reducer(state = initialState, action) {
  switch(action.type) {
    case "INCREMENT":
      return { ...state, counter: state.counter + action.num }
    default:
      return state;
  }
}

const store = redux.createStore(reducer);

store.subscribe(() => {
  console.log(store.getState().counter)
})

const action = { type: "INCREMENT", num: 10 };

store.dispatch(action)