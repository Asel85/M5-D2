
import './App.css';
import React, { Component } from 'react';
import MyNav from './components/MyNav';
import Welcome from './components/Welcome';

class App extends Component{
  render(){
    return (
      <>
      <MyNav/>
      <Welcome/>
      </>
    )
  }
}

export default App;
