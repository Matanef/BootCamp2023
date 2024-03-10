import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      inputValue: '',
      serverResponse: ''
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/world', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ value: this.state.inputValue })
      });
      const data = await response.text();
      this.setState({ serverResponse: data });
    } catch (error) {
      console.log('error', error);
    }
  };

  handleChange = (e) => {
    this.setState({ inputValue: e.target.value });
  };

  render() {
    return (
      <div>
        <h1>ReactApp</h1>
        <form onSubmit={this.handleSubmit}>
          <input type='text' value={this.state.inputValue} onChange={this.handleChange} />
          <button type='submit'>Submit</button>
        </form>
        {this.state.serverResponse && (
          <p>Server response: {this.state.serverResponse}</p>
        )}
      </div>
    );
  }
}

export default App;
