const React = require('react');

class Car extends React.Component {
  constructor(props) {
    super(props);
    this.state = {color: "red"};
  }
  render() {
    return (<h2>I am a Car!</h2>);
  }
}

