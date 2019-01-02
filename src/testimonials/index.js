import React, { Component } from 'react';
import './Testimonials.css';

class Testimonials extends Component {
  render() {
    return (
        <section className="container-fluid padding" id="testimonials">
            <div className="row padding">
                <div className="col-12 text-center testimonials-title">
                    <h1 className="display-5">Testimonials</h1>
                    <hr />
                    <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin efficitur lorem ac ipsum aliquam, in aliquet elit porta. Etiam leo ex, lobortis ac vulputate eu, tempus vel metus. Donec varius dui quis ante tempor</p>
                </div>
                
                <div className="col-lg-12 col-xl-4 padding">
                    <div className="media">
                        <img src="//placehold.it/70" className="mr-3 rounded-circle" alt="..." />
                        <div className="media-body">
                            <h5 className="mt-0">Person 1</h5>
                            <blockquote><p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p></blockquote>
                        </div>
                    </div>
                </div>
                <div className="col-lg-12 col-xl-4 padding">
                    <div className="media">
                        <img src="//placehold.it/70" className="mr-3 rounded-circle" alt="..." />
                        <div className="media-body">
                            <h5 className="mt-0">Person 2</h5>
                            <blockquote><p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p></blockquote>
                        </div>
                    </div>
                </div>
                <div className="col-lg-12 col-xl-4 padding">
                    <div className="media">
                        <img src="//placehold.it/70" className="mr-3 rounded-circle" alt="..." />
                        <div className="media-body">
                            <h5 className="mt-0">Person 3</h5>
                            <blockquote><p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p></blockquote>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
  }
}

export default Testimonials;
