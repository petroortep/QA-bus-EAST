import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Customers from './components/customers';
import Header from './components/header';
import MenuBar from './components/menubar';
import Home from './components/Home';
import AboutMe from './components/aboutme'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';



class App extends Component{
  render(){
    return(
      <Router>
      <div className="App">
       
          <MenuBar />
          
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/aboutme"  component={AboutMe} />
          </Switch>
        
        

      <Customers/>
    </div>
    </Router>
    );
  }
}


export default App;

