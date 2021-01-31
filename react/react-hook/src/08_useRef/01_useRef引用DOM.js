import React, { useRef } from 'react'

export default function RefHookDemo01() {

  const titleRef = useRef();
  const inputRef = useRef();

  function changeDOM() {
    titleRef.current.innerHTML = 'hello world'
  }

  return (
    <div>
      <h2 ref={titleRef}>refHookDemo01</h2>
      <input ref={inputRef} type="text"/>

      <button onClick={e => changeDOM()}>修改DOM</button>
    </div>
  )
}
