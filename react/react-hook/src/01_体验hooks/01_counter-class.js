import React, { PureComponent } from 'react'

export default class Counter extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0
    }
  }
  render() {
    return (
      <div>
        {this.state.counter}
        <button onClick={e => this.increment()}>+</button>
      </div>
    )
  }

  increment() {
    this.setState({
      counter: this.state.counter + 1
    })
  }
}
