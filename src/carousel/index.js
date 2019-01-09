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
                        <h3>Software Developer</h3>
                        <div class="col-12">
                            <a href="https://github.com/mromarreyes" rel='noopener noreferrer' target="_blank"><i className="fab fa-github mb-3 rounded"></i></a>
                        </div>
                        <div class="col-12">
                            <a href="mailto:reyomar80@hotmail.com" className="btn btn-primary btn-lg">Get in touch</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
  }
}

export default Carousel;
