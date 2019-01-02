import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        { /* Navigation */ }
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

        { /* Carousel */ }
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

        { /* About */ }
        <section className="jumbotron jumbotron-fluid" id="about">
            <div className="row">
                    <div className="col-12 work-title text-center">
                        <h1 className="display-4">About Me</h1>
                    </div>
                <div className="col-12 text-center">
                    <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin efficitur lorem ac ipsum aliquam, in aliquet elit porta. Etiam leo ex, lobortis ac vulputate eu, tempus vel metus. Donec varius dui quis ante tempor, sodales tincidunt libero vehicula. Nullam eu imperdiet nisi. Ut eu velit magna. Quisque bibendum ornare ultricies. Aenean enim metus, malesuada sed volutpat et, dignissim at eros. Sed et nisl turpis. Nulla facilisi. Proin semper, metus sed fringilla accumsan, enim elit imperdiet augue, suscipit ornare ipsum purus ut lectus. Nullam tincidunt leo nec sagittis facilisis. Suspendisse gravida, lacus id luctus gravida, mauris nulla tempus felis, ut imperdiet enim nulla id neque.</p>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-4 text-center">
                    <i className="fas fa-code"></i>
                    <h3>Javascript</h3>
                    <p>Blah javascript</p>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-4 text-center">
                    <i className="fab fa-php"></i>
                    <h3>PHP</h3>
                    <p>Blah PHP</p>
                </div>
                <div className="col-sm-12 col-md-4 text-center">
                    <i className="fal fa-mobile"></i>
                    <h3>App Development</h3>
                    <p>Blah apps</p>
                </div>
            </div>
        </section>

        { /* Work */ }
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

        { /* Testimonials */ }
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
      </div>
    );
  }
}

export default App;
