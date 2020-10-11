import React, { Component } from 'react';
import './App.scss';
import Header from './components/Header';
import Product from './components/Product';
import AppleProducts from './components/AppleProducts'
import HuaweiProducts from './components/HuaweiProducts'

class App extends Component {
  render() {
    return (
      <main className="app">
        <Header/>
        <AppleProducts/>
        <HuaweiProducts/>
      </main>
    );
  }
}

export default App;
