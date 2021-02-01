import React, { useLayOutEffect, useState } from 'react';

export default function UseLayOutEffect() {
  const [count, setCount] = useState(10);

  useLayOutEffect(() => {
    if (count === 0) {
      setCount(Math.random())
    }
  }, [count])

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={e => setCount(0)} >====</button>
    </div>
  )
}
