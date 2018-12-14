import React, { Component } from 'react';
import OrderList from './components/OrderList';
import Header from './components/Header';
import FreeContent from './components/FreeContent';
import './App.css';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <OrderList/>
        <FreeContent/>
      </div>
    );
  }
}
export default App;
