import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = { words: [] };

  componentDidMount() {
    fetch('/words')
      .then(res => res.json())
      .then(words => this.setState({ words }));
  }

  renderWords() {
    const { words } = this.state;

    if (!words.length) return <div>No Words</div>;

    return words.map(word => <li key={word}>{word}</li>);
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <ul>
          {this.renderWords()}
        </ul>
      </div>
    );
  }
}

export default App;
