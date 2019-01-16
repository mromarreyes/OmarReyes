import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
        <footer className="p-4 gray">
            <div className="footer-copyright text-center py-3">© 2019
                <a href="/"> ReyesOmar.com</a>
            </div>
        </footer>
    );
  }
}

export default Footer;
