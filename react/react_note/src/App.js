import React, { PureComponent } from 'react';
// import SwitchTransitionDemo from './transition/SwitchTransitionDemo'
import TransitionGroupDemo from './transition/TransitionGroupDemo';

export default class App extends PureComponent {
  render() {
    return (
      <div>
        {/* <SwitchTransitionDemo/> */}
        <TransitionGroupDemo/>
      </div>
    )
  }
}
