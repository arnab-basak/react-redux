import React, {Component} from "react";
import "./styles.css";
// import { reducerF} from './reducer';
// import { createStore } from 'redux';

class App extends Component {
  // store = createStore(reducerF);
  render() {
    return (
      <div className="App">
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
export default App;
