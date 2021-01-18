import React, { PureComponent } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './TransitionGroupDemo.css'

export default class TransitionGroupDemo extends PureComponent {
  
  constructor(props) {
    super(props); 

    this.state = {
      name: ['111', '222', '333']
    }
  }
  render() {
    return (
      <div>
        <TransitionGroup>
          {
            this.state.name.map((item, index) => {
              return (
                <CSSTransition key={index}
                              timeout={1000}
                              classNames={'item'}>
                  <div>{item}</div>
                </CSSTransition>
              )
            })
          }
        </TransitionGroup>
        <button onClick={e => this.addName()}>+name</button>
      </div>
    )
  }

  addName() {
    this.setState({
      name: [...this.state.name, '666']
    })
  }
}
