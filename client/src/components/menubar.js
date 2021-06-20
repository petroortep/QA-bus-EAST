import React, { Component, useState } from 'react';
//import { Link } from 'react-router-dom';
//import logo from '../logo.png';
//import { FaBars, FaTimes } from 'react-icons/fa';
import * as FaIcons from 'react-icons/fa';
import './menubar.css'
import { MenuItems } from "./MenuItems"

class MenuBar extends Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {
        return(
            <nav className="MenubarItems">
                {/*<div className="manubar-container">
                    <img src={logo} className="manubar-logo" alt="logo"/>
                </div>*/}
                <h1 className="menubar-logo">React<i className="fab fa-react"></i></h1>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active':'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                    {item.title}
                                </a>
                            </li>
                        )
                    })}
                    
                </ul>
            </nav>
        )
    }
}



       {/* <div className="menubar">
            <!-- Load an icon library to show a hamburger menu (bars) on small screens -->
         </link>
            <nav>
                <a href="#home" class="active">Home</a>
                <a href="#aboutme">About Me</a>
                <a href="#faq">FAQ</a>
                <a href="#testimonials">Testimonials</a>
                <a href="#referrals">Referrals</a>
                <a href="#contactus">Contact Us</a>
                <a href="javascript:void(0);" class="icon" onclick="myFunction()">
                    <i class="fa fa-bars"></i>
                </a>
            </nav>
            
            </div>
    );
  }
}*/}

export default MenuBar;