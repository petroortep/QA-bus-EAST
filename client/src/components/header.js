import React, { Component } from 'react';
import logo from '../logo.png';
import './header.css';

class Header extends Component {
  render() {
    return(
        <div className="blk-background">
        <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 className='App-title'>Jeremy Roofing Co.</h1>
        </header>
        </div>
        </div>
        // <div>
        //     <h4>Small header</h4>
        // </div>
    );
  }
}

export default Header;


