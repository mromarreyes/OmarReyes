import React, { Component } from 'react';
import './Nav.css';
import logo from '../images/logo.svg';

class Nav extends Component {
  render() {
    return (
        <header>
            <nav className="navbar navbar-light navbar-expand-md bg-light justify-content-md-center justify-content-start fixed-top">
                <a className="navbar-brand d-md-none d-inline" href="#home"><img width="50" height="50" src={logo} alt="logo" /></a>
                <button className="navbar-toggler ml-1" type="button" data-toggle="collapse" data-target="#myNavbar">
                    <span className="navbar-toggler-icon" />
                </button>

                <div className="navbar-collapse collapse justify-content-between align-items-center w-100" id="myNavbar">
                    <ul className="navbar-nav mx-auto text-md-center text-left">
                        <li className="nav-item">
                            <a className="nav-link" href="#about">About</a> 
                        </li>
                        <li className="nav-item my-auto">
                            <a className="nav-link navbar-brand mx-0 d-none d-md-inline" href="#home"><img width="50" height="50" src={logo} alt="logo" /></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#work">Work</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
  }
}

export default Nav;
