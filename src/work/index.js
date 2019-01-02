import React, { Component } from 'react';
import './Work.css';

class Work extends Component {
  render() {
    return (
        <section className="container-fluid padding" id="work">
            <div className="row padding">
                <div className="col-12 text-center work-title">
                    <h1 className="display-5">Work</h1>
                    <hr />
                    <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin efficitur lorem ac ipsum aliquam, in aliquet elit porta. Etiam leo ex, lobortis ac vulputate eu, tempus vel metus. Donec varius dui quis ante tempor</p>
                </div>
                
                <div className="col-md-4 padding">
                    <div className="card">
                        <img className="card-img-top" src="//placehold.it/30" alt="..." />
                        <div className="card-body">
                            <h4 className="card-title">a title</h4>
                            <p className="card-text">a list of text</p>
                            <a href="#seework1" className="btn btn-outline-secondary">See work</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 padding">
                    <div className="card">
                        <img className="card-img-top" src="//placehold.it/30" alt="..."  />
                        <div className="card-body">
                            <h4 className="card-title">a title</h4>
                            <p className="card-text">a list of text</p>
                            <a href="#seework2" className="btn btn-outline-secondary">See work</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 padding">
                    <div className="card">
                        <img className="card-img-top" src="//placehold.it/30" alt="..."  />
                        <div className="card-body">
                            <h4 className="card-title">a title</h4>
                            <p className="card-text">a list of text</p>
                            <a href="#seework3" className="btn btn-outline-secondary">See work</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
  }
}

export default Work;
