import React, { useState } from 'react';

export default function CounterHook() {
  // Hook: useState 本身是一个函数
  const arr = useState(0);
  const state = arr[0];
  const setState = arr[1];

  return (
    <div>
        {state}
        <button onClick={e => setState(state + 1)}>+</button>
      </div>
  )
}
