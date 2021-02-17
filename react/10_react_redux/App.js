import React, { PureComponent } from 'react';
import Home from './src/pages/home';
import About from './src/pages/about';

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <Home/>
        <About/>
      </div>
    )
  }
}
