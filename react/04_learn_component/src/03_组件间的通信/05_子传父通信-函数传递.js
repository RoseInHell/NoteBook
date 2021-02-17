import React, { PureComponent } from 'react';

class CounterButton extends PureComponent {
  render() {
    const { btnClick } = this.props;
    return <button onClick={btnClick}>+1</button>
  }
}

export default class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0
    }
  }

  render() {
    return (
      <div>
        <h2>当前计数：{this.state.counter}</h2>
        <CounterButton btnClick={e => this.increment()} />
      </div>
    )
  }

  increment() {
    this.setState({
      counter: this.state.counter + 1
    })
  }
}
