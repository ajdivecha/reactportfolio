import React, { Component } from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import Navbar from './components/Navbar';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Navbar />
        
      </div>
    );
  }
}

export default App;
