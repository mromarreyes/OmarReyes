import React, { Component } from 'react';
import './Nav.css';

class Nav extends Component {
  render() {
    return (
        <header>
            <nav className="navbar navbar-light navbar-expand-md bg-light justify-content-md-center justify-content-start fixed-top">
                <a className="navbar-brand d-md-none d-inline" href="#home"><img src="//placehold.it/50" alt="" /></a>
                <button className="navbar-toggler ml-1" type="button" data-toggle="collapse" data-target="#myNavbar">
                    <span className="navbar-toggler-icon" />
                </button>
                <a className="nav-link" href="#search"><i className="fa fa-search"></i></a> 
                <div className="navbar-collapse collapse justify-content-between align-items-center w-100" id="myNavbar">
                    <ul className="navbar-nav mx-auto text-md-center text-left">
                        <li className="nav-item">
                            <a className="nav-link" href="#about">About</a> 
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#work">Work</a>
                        </li>
                        <li className="nav-item my-auto">
                            <a className="nav-link navbar-brand mx-0 d-none d-md-inline" href="#home"><img src="//placehold.it/50/" alt="" /></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#testimonials">Testimonial</a> 
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contact">Contact</a> 
                        </li>
                    </ul>
                    <ul className="nav navbar-nav flex-row justify-content-md-center justify-content-start flex-nowrap">
                        <li className="nav-item">
                            <a className="nav-link" rel='noopener noreferrer' target="_blank" href="https://github.com/mromarreyes"><i className="fab fa-github mr-1"></i></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#twitter"><i className="fab fa-twitter"></i></a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
  }
}

export default Nav;
