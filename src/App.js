import React, { Component } from 'react';
import './App.css';
import Header from './Header/Header';
import RobotList from './RobotList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <RobotList />
      </div>
    );
  }
}

export default App;
