import React, { Component } from 'react';
import './About.css';

class About extends Component {
  render() {
    return (
        <section className="jumbotron jumbotron-fluid" id="about">
            <div className="row padding">
                <div className="col-12 work-title text-center">
                    <h1 className="display-4">Hi, I'm Omar</h1>
                </div>
                <div className="col-12 text-center p-5">
                    <p className="lead mx-auto" style={{ width: '70%'}}>I'm a Software Developer currently working at <a href="http://petexec.net" target="_blank" rel="noopener noreferrer">PetExec</a>. 
                    I've got more than 8 years of experience in a wide range of technologies. 
                    I've developed application programming interfaces (API), mobile applications, and web applications.
                    I write code and improve my skills every day.
                    If you have any cool projects or opportunities <a href="mailto:reyomar80@hotmail.com">get in touch!</a></p>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-4 text-center">
                    <i className="fas fa-graduation-cap"></i>
                    <h3>Computer Science</h3>
                    <p>Arizona State University Tempe, AZ</p>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-4 text-center">
                    <i className="far fa-palette"></i>
                    <h3>Font-end</h3>
                    <p>CSS3, Bootstrap, ES6, Javascript, React</p>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-4 text-center">
                    <i className="fas fa-code"></i>
                    <h3>Back-end</h3>
                    <p>GraphQL, NodeJS, PHP, RESTful</p>
                </div>

                <div className="col-xs-12 col-sm-6 col-md-4 text-center">
                    <i className="far fa-database"></i>
                    <h3>Databases</h3>
                    <p>MySQL, PostgreSQL</p>
                </div>

                <div className="col-xs-12 col-sm-6 col-md-4 text-center">
                    <i className="fab fa-aws"></i>
                    <h3>Amazon Web Services</h3>
                    <p>API Gateway, Cognito, Lambda, S3, Serverless Framework</p>
                </div>

                <div className="col-xs-12 col-sm-6 col-md-4 text-center">
                    <i className="fal fa-mobile"></i>
                    <h3>Mobile</h3>
                    <p>Java, Swift, React Native</p>
                </div>

                
            </div>
        </section>
    );
  }
}

export default About;
