import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Customers from './components/customers';
import MenuBar from './components/menubar';
import Home from './components/pages/home';
import AboutMe from './components/pages/aboutme';
import FAQ from './components/pages/faq';
import Testimonials from './components/pages/testimonials';
import Referrals from './components/pages/referrals';
import ContactUs from './components/pages/contactus';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';



class App extends Component{
  render(){
    return(
      <div className="App">
      <Router>
          <MenuBar />
          
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/pages/aboutme"  component={AboutMe} /> 
            <Route path="/pages/faq"  component={FAQ} />  
            <Route path="/pages/testimonials"  component={Testimonials} /> 
            <Route path="/pages/referrals"  component={Referrals} />
            <Route path="/pages/contactus"  component={ContactUs} />
          </Switch>

      <Customers/>
      </Router>
    </div>
    );
  }
}
{/*
class Home extends Component {
  render() {
    return(
        <div className="Homepage">
            <Header />
        </div>
    );
  }
}
*/}
export default App;

