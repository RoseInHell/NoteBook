import React, { PureComponent } from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';

function AboutHistory(props) {
  return <h2>1</h2>
}

function AboutCulture(props) {
  return <h2>2</h2>
}

function AboutContact(props) {
  return <h2>3</h2>
}

function AboutJoin(props) {
  return <h2>3</h2>
}

export default class About extends PureComponent {
  render() {
    return (
      <div>
        <h2>about</h2>
        <NavLink exact activeClassName='link-active' to="/about">企业历史</NavLink>
        <NavLink  activeClassName='link-active' to="/about/culture">企业文化</NavLink>
        <NavLink  activeClassName='link-active' to="/about/contact">联系我们</NavLink>
        <button onClick={e => this.jumpToJoin()}>加入我们</button>

        <Switch>
          <Route exact path='/about' component={AboutHistory} />
          <Route exact path='/about/culture' component={AboutCulture} />
          <Route exact path='/about/contact' component={AboutContact} />
          <Route exact path='/about/join' component={AboutJoin} />
        </Switch>
      </div>
    )
  }
  
  jumpToJoin() {
    this.props.history.push('/about/join')
  }
}
