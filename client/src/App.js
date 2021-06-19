import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Customers from './components/customers';
import Header from './components/header';
import MenuBar from './components/menubar';



class App extends Component{
  render(){
    return(
      <div className="App">
        <Header />

      <Customers/>
    </div>
    );
  }
}


export default App;

