import React, { PureComponent } from 'react';
import { renderRoutes } from 'react-router-config'

// import Home from './pages/home';
// import About from './pages/about';
// import Profile from './pages/profile';
// import Login from './pages/login';
// import User from './pages/user';
// import Detail from './pages/detail';

import './App.css'

import {
  Route,
  NavLink,
  Switch,
  withRouter
} from 'react-router-dom'

class App extends PureComponent {
  render() {
    const info = { name: 'why', age: 18, height: 1.88 }

    return (
      <div>
        <h2>App</h2>
          {/* <Link to="/">首页</Link>
          <Link to="/about">关于</Link>
          <Link to="/profile">我的</Link> */}
          <NavLink exact to="/" activeClassName="link-active" >首页</NavLink>
          <NavLink to="/about" activeClassName="link-active" >关于</NavLink>
          <NavLink to="/profile" activeClassName="link-active" >我的</NavLink>
          <NavLink to="/user" activeClassName="link-active" >用户</NavLink>
          <NavLink to={`/detail?name=why&age=18`} activeClassName="link-active" >detail</NavLink>

          {/* <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/about" component={About}  />
            <Route path="/profile" component={Profile} />
            <Route path="/user" component={User} />
            <Route path="/login" component={Login} />
            <Route path="/detail" component={Detail} />
          </Switch> */}
      </div>
    )
  }
}

export default withRouter(App)