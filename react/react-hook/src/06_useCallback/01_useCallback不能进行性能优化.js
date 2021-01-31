import React, { useCallback, useState } from 'react'

export default function CallbackHookDemo01() {
  const [count, setCount] = useState(0);

  const increment1 = () => {
    console.log('执行了increment1函数');
    setCount(count + 1);
  }

  const increment2 = useCallback(() => {
    console.log('执行了increment2函数');
    setCount(count + 1);
  }, [count]);

   return (
    <div>
      <h2>CallbackHookDemo01 {count}</h2>
      <button onClick={increment1}>+1</button>
      <button onClick={increment2}>+1</button>
    </div>
  )
}
