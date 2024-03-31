import React from "react";
import ReactDOM from "react-dom";

class ButtonCount extends React.Component {
    constructor(props) {
      super(props);
      this.state = { count: 0 };
    }
  
    // Increments count based on props.step
    incrementCount = () => {
      this.setState((state, props) => {
        return { count: state.count + props.step };
      });
    };
  
    // Resets count back to 0
    resetCount = () => {
      this.setState({ count: 0 });
    };
  
    render() {
      return (
        <div>
          <p>The count is {this.state.count}.</p>
          <button onClick={this.incrementCount}>+ {this.props.step}</button>
          <button onClick={this.resetCount}>Reset count</button>
        </div>
      );
    }
  }
  
//   ReactDOM.render(<ButtonCount step={1} />, document.getElementById("root"));

export default ButtonCount