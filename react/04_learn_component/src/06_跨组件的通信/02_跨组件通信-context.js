import React, { Component } from 'react';

const UserContext = React.createContext({
  nickname: "a",
  level: 1
})

class Profile extends Component {
  render() {
    console.log(this.context);
    return (
      <div></div>
    )
  }
}
Profile.contextType = UserContext;

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nickname: "kobe",
      level: 99
    }
  }
  render() {
    return (
      <div>
        <UserContext.Provider>
          <Profile/>
        </UserContext.Provider>
        
      </div>
    )
  }
}
