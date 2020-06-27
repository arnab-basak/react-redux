import React from 'react';
import { connect } from 'react-redux';

class Container extends React.Component {
  state = {
    count:0
  }
  render(){
    return (
      <div>
        <button>Increment</button>
        <button>Decrement</button>
        <div className="displayDiv">
          <span>Counter:</span>
          <span>2</span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ctr: state.counter
  };
}

const mapDispatchToProps = dispatch => {
  return {
    increment: ()=> dispatch({type: 'INCREMENT'}),
    decrement: ()=> dispatch({type: 'DECREMENT'})
  };
}

export default connect(mapStateToProps)(Container);