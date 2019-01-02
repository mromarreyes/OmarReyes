import React, { Component } from 'react';
import './About.css';

class About extends Component {
  render() {
    return (
        <section className="jumbotron jumbotron-fluid" id="about">
            <div className="row">
                <div className="col-12 work-title text-center">
                    <h1 className="display-4">About Me</h1>
                </div>
                <div className="col-12 text-center p-5">
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
    );
  }
}

export default About;
