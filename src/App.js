import React, { Component } from 'react';
import Nav from './nav';
import Carousel from './carousel';
import About from './about';
import Work from './work';
import Testimonials from './testimonials';
import Footer from './footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        { /* Navigation */ }
        <Nav />

        { /* Carousel */ }
        <Carousel />

        { /* About */ }
        <About />

        { /* Work */ }
        <Work />

        { /* Testimonials */ }
        { /* <Testimonials /> */ }

        { /* Footer */}
        <Footer />
      </div>
    );
  }
}

export default App;
