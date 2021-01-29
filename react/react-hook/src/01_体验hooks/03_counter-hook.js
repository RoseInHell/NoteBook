import React, { useState } from 'react';

export default function CounterHook() {
  const [ count , setCount] = useState(0)

  return (
    <div>
      {count}
      <button onClick={e => setCount(count +1)}>+</button>
    </div>
  )
}
