import React from 'react';
import { connect } from 'react-redux'; 
import { addAction } from '../store/actionCreator';

function About(props) {
  return (
    <div>
      About
      <h2>当前计数: {props.counter}</h2>
      <button onClick={e => props.addAction(5)}>+1</button>
    </div>
  )
}


const mapStateToProps = state => {
  return {
    counter: state.counter
  }
};
const mapDispatchToProps = dispatch => {
  return {
    addAction: function(num) {
      dispatch(addAction(num));
    }
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(About);

