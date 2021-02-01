import React, { createContext } from 'react';
// import Counter from './01_体验hooks/01_counter-class';
// import CounterHook from './01_体验hooks/02_counter-hook';
// import MultiHookState from './02_userState/01_多个状态';
// import CompletHookState from './02_userState/02_复杂状态';
// import ContenxtHookDemo from './04_useContext使用/useContext的使用';
// import MemoHookDemo01 from './07_useMemo使用/01_useMemo复杂计算的应用'
// import RefHookDemo02 from './08_useRef/02_useRef引用其他数据';
// import ForwardRefDemo from "./09_useImperativeHandle/01_回顾forwardRef的用法";
// import UseImperativeHookHandle from './09_useImperativeHandle/02_useImperativeHandle用法';
import CustomContextShareHook from './11_自定义Hook/02_自定义Hook练习-Context共享';

export const UserContext = createContext();
export const TokenContext = createContext();

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
      {/* <RefHookDemo02/> */}
      {/* <ForwardRefDemo/> */}
      {/* <UseImperativeHookHandle/> */}

      <UserContext.Provider value={{name: 'why', age: 18}}>
        <TokenContext.Provider value='frown'>
          <CustomContextShareHook/>
        </TokenContext.Provider>
      </UserContext.Provider>
    </div>
  )
}


export default App;