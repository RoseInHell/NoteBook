import React, { PureComponent } from 'react'

class App extends PureComponent {
  render() {
    return (
      <div>
        App
      </div>
    )
  }
}

function enhanceComponent(WrapperComponent, componentName) {
  class NewComponent extends PureComponent {
    render() {
      return <WrapperComponent {...this.props} />
    }
  }

  NewComponent.displayName = componentName;

  return NewComponent;
}

function enhanceComponent2(WrapperComponent, componentName) {
  function NewComponent(props) {
    return <WrapperComponent {...props} />
  }

  NewComponent.displayName = componentName;

  return NewComponent;
}



export default enhanceComponent(App, 'coderwhy');
