import React, { useCallback, useState, memo, useMemo } from 'react'

const HYButton = memo((props) => {
  return <button onClick={props.increment}>+1</button>
})

export default function CallbackHookDemo02() {
  const [count, setCount] = useState(0);

  const increment1 = () => {
    console.log('执行increment1函数');
    setCount(count + 1);
  };

  const increment2 = useCallback(() => {
    console.log('执行increment2函数');
    setCount(count + 1);
  }, [count]);

  const increment3 = useMemo(() => {
    return () => {
      console.log('执行increment3函数');
      setCount(count + 1);
    }
  }, [count])

  return (
    <div>
      <h2>{count}</h2>
      <HYButton increment={increment1} />
      <HYButton increment={increment2} />
      <HYButton increment={increment3} />
    </div>
  )
}
