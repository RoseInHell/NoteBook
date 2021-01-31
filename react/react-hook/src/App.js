import React, { createContext } from 'react';
// import Counter from './01_体验hooks/01_counter-class';
// import CounterHook from './01_体验hooks/02_counter-hook';
// import MultiHookState from './02_userState/01_多个状态';
// import CompletHookState from './02_userState/02_复杂状态';
// import ContenxtHookDemo from './04_useContext使用/useContext的使用';
// import MemoHookDemo01 from './07_useMemo使用/01_useMemo复杂计算的应用'
import RefHookDemo02 from './08_useRef/02_useRef引用其他数据';

export const UserContext = createContext();
export const ThemeContext = createContext();

function App() {
  
  return (
    <div>
      App
      {/* <Counter/> */}
      {/* <MultiHookState/> */}
      {/* <CompletHookState/> */}
      {/* <ThemeContext.Provider value={{name:'why', aeg:18}}>
        <UserContext.Provider value={{fontSize: '30px', color: 'red'}}>
          <ContenxtHookDemo/>
        </UserContext.Provider>
      </ThemeContext.Provider> */}
      {/* <MemoHookDemo01/> */}
      <RefHookDemo02/>
    </div>
  )
}


export default App;