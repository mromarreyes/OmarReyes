import React, { Component } from 'react';
import './Carousel.css';

class Carousel extends Component {
  render() {
    return (
        <section id="home" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=1000&w=400" className="d-block w-100 img-fluid" alt="..." />
                    <div className="carousel-caption">
                        <h1 className="display-2">Omar Reyes</h1>
                        <h3>blah blah blah blah</h3>
                        <button type="button" className="btn btn-outline-light btn-lg">blah</button>
                        <button type="button" className="btn btn-primary btn-lg">blah</button>
                    </div>
                </div>
            </div>
        </section>
    );
  }
}

export default Carousel;
