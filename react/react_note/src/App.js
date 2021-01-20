import React, { PureComponent } from 'react';
// import SwitchTransitionDemo from './transition/SwitchTransitionDemo'
// import TransitionGroupDemo from './transition/TransitionGroupDemo';
import Home from './pages/home';
import About from './pages/about';
export default class App extends PureComponent {
  render() {
    return (
      <div>
        {/* <SwitchTransitionDemo/> */}
        {/* <TransitionGroupDemo/> */}
        <Home/>
        <About/>
      </div>
    )
  }
}
