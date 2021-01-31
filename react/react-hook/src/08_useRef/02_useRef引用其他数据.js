import React, { useState, useEffect, useRef } from 'react'

export default function RefHookDemo02() {
  const [count, setCount] = useState(0);

  const numRef = useRef(count);

  useEffect(() => {
    numRef.current = count;
    console.log('count',count)
    console.log(numRef.current)
  },[count])

  return (
    <div>
      {numRef.current}
      {count}
      <button onClick={e => setCount(count + 10)}>+10</button>
    </div>
  )
}
