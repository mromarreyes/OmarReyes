import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import logo from '../../images/logo.svg';
import './header.css';

const Header = ({ siteTitle }) => (
    <header>
        <nav className="navbar navbar-light navbar-expand-md bg-light justify-content-md-center justify-content-start fixed-top">
            <Link className="navbar-brand d-md-none d-inline" to="/"><img width="50" height="50" src={logo} alt="logo" /></Link>
            <button className="navbar-toggler ml-1" type="button" data-toggle="collapse" data-target="#myNavbar">
                <span className="navbar-toggler-icon" />
            </button>

            <div className="navbar-collapse collapse justify-content-between align-items-center w-100" id="myNavbar">
                <ul className="navbar-nav mx-auto text-md-center text-left">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link> 
                    </li>
                    <li className="nav-item my-auto">
                        <Link className="nav-link navbar-brand mx-0 d-none d-md-inline" to="/"><img width="50" height="50" src={logo} alt="logo" /></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/blog">Blog</Link>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
