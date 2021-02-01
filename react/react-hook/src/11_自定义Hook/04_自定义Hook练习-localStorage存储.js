import React from 'react';
import useLocalStorage from "../hooks/local-store-hook";

export default function CustomDataStoreHook() {

  const [name, setName] = useLocalStorage()

  return (
    <div>
      <h2>CustomDataStoreHook</h2>
      <h3>{name}</h3>
      <button onClick={e => setName("coderwhy")}>++</button>
    </div>
  )
}
