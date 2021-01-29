import React, { PureComponent } from 'react';

export function connect(mapStateToProps, mapDispatchToprops) {
  return function enhanceHOC(WrappedComponent) {
    class EnhanceComponent extends PureComponent{
      constructor(props, child, aaa) {
        super(props, child, aaa);

        this.state = {
        }
      }
    }
  }
}