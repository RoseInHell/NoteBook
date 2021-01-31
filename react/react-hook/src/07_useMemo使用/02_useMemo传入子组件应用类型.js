import React, {useState, useMemo} from 'react'

const HYinfo = (props) => {
  return <h2>{props.info.name}</h2>
}

export default function MemoHookDemo02() {
  console.log('02重新渲染了');
  const [show, setShow] = useState(true);

  const info = useMemo(() => {
    return { name: 'why', age: 18 }
  }, []);
  return (
    <div>
      <HYinfo info={info} />
      <button onClick={e => setShow(!show)}>+1</button>
    </div>
  )
}
