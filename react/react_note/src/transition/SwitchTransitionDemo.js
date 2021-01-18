import React, { PureComponent } from 'react';

import { SwitchTransition, CSSTransition } from 'react-transition-group';
import './SwitchTransition.css'

export default class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isOn: false
    }
  }
  render() {
    const { isOn } = this.state;
    return (
      <div>
        <SwitchTransition mode="in-out">
          <CSSTransition key={isOn ? "on": "off"}
                         classNames={'btn'} 
                         timeout={1000}>
            <button onClick={e => this.setState({isOn: !isOn})}>
              {isOn ? "on" : "off"}
            </button>
          </CSSTransition>
        </SwitchTransition>
      </div>
    )
  }
}