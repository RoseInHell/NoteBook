import React, { PureComponent } from 'react'
import store from '../store/index';
import { addAction } from '../store/actionCreator';

export default class About extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      counter: store.getState().counter
    }
  }

  componentDidMount() {
    this.unsubscibe = store.subscribe(() => {
      this.setState({
        counter: store.getState().counter
      })
    })
  }

  componentWillUnmount() {
    this.unsubscibe();
  }

  render() {
    return (
      <div>
        About
        <h2>当前计数: {this.state.counter}</h2>
        <button onClick={e => this.decrement()}>+1</button>
      </div>
    )
  }

  decrement() {
    store.dispatch(addAction(1))
  }
}
