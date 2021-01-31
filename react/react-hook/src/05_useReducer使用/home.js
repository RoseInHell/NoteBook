import React, { useState, useReducer } from 'react';

function reducer(state, action) {
  switch(action.type) {
    case "increment":
      return {...state, counter: state.counter + 1};
    default:
      return state;
  }
}

export default function Home() {
  const [count, setCount] = useState(0)
  cosnt [state, dispatch] = useReducer(reducer, {counter: 0});

  return (
    <div>
      <h2>Home当前计数：{count}</h2>
      <button onClick={e => dispatch({type: "increment"})}></button>
    </div>
  )
}
