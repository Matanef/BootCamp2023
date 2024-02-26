import React from 'react';

const MyComponent = (props) => {
    return (<h1>Hello {props.name}!</h1>);
}

export default class App extends React.Component {
  render() {
    return (

      // Passing the name when using the component
      <div>
        <MyComponent name='Julius'/> 
        <MyComponent name='Caesar'/>
      </div>
    );
  }
}