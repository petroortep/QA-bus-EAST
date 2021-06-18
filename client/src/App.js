import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Customers from './components/customers';
import Header from './components/header';





class App extends Component{
  render(){
    return(
      <div className="App">
        <Header />
        {/* <header className="App=header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 className='App-title'>Jeremy Roofing Co.</h1>
        </header> */}

      <Customers/>
      
    </div>
    );
  }
}


export default App;
