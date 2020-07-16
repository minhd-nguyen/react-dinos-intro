import React, { Component } from 'react';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>{this.props.title}</h1>
        <p>by {this.props.author}</p>
        <p>{this.props.body}</p>
        <h2>Comment: </h2>
        <p>{this.props.comment[0]}</p>
      </div>
    )
  }
}
