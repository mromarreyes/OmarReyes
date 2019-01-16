import React, { Component } from 'react';
import './Work.css';
import topdogdaycare from '../../images/work/topdogdaycare.png';
import petexecapp from '../../images/work/petexecapp.jpg';
import petexecapi from '../../images/work/petexecapi.png';

class Work extends Component {
    render() {
        return (
            <section className="container-fluid padding" id="work">
                <div className="row padding mx-xl-auto" id="project-container">
                    <div className="col-12 text-center work-title">
                        <h1 className="display-5">Projects</h1>
                        <hr />
                        <p className="lead">Here are a few projects I've worked on.</p>
                    </div>
                    
                    <div className="col-md-4 p-xl-5 padding rounded">
                        <div className="card">
                            <img  className="card-img-top img-fluid border-bottom" src={petexecapp} alt="PetExec Mobile"  />
                            <div className="card-body">
                                <h4 className="card-title">PetExec Mobile</h4>
                                <p className="card-text">Designed to compliment the PetExec owner portal website</p>
                                <a href="https://itunes.apple.com/us/app/petexec-mobile/id1349975309" target="_blank" rel='noopener noreferrer' className="btn btn-outline-secondary">See work</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 p-xl-5 padding rounded">
                        <div className="card">
                            <img  className="card-img-top img-fluid border-bottom" src={petexecapi} alt="..."  />
                            <div className="card-body">
                                <h4 className="card-title">PetExec API</h4>
                                <p className="card-text">Enables developers to integrate PetExec on their own website or app.</p>
                                <a href="https://secure.petexec.net/api" target="_blank" rel='noopener noreferrer' className="btn btn-outline-secondary">See work</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 p-xl-5 padding rounded">
                        <div className="card">
                            <img  className="card-img-top img-fluid border-bottom" src={topdogdaycare} alt="Top Dog Daycare" />
                            <div className="card-body">
                                <h4 className="card-title">Top Dog Daycare</h4>
                                <p className="card-text">Dog daycare and Pet Boarding Facility in Columbus, OH</p>
                                <a href="http://topdogdaycare.net/" target="_blank" rel='noopener noreferrer' className="btn btn-outline-secondary">See work</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Work;
