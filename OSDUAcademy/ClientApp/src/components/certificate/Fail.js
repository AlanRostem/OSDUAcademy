import React, {Component} from 'react';
import {Footer} from "../navbar/Footer";
import {Container} from "reactstrap";
import {CertificationNavMenu} from "../navbar/CertificationNavMenu";
import '../certificate/certificate.css'

/**
 * The component returns
 */

export class Fail extends Component {
    static displayName = Fail.name;

    render() {
        return (
            <div>
                <CertificationNavMenu/>
                <Container className="pre-test-info">
                    <div className="sorry-box">
                        <h2>Unfortunately, </h2>

                        <h6>You have not passed the "{this.props.course}" certification test.
                        </h6>

                        <p className="score">Your score is:
                            <strong> {Math.round((this.props.right)/(this.props.questionCount) * 100)} %</strong></p>

                        <p>
                            To succesfully complete the course, you have to pass the certification test. We strongly 
                            recommend you to check the course content once again and make sure that you understand.
                        </p>
                        
                        <p>If you think that there was a mistake in the quiz, please contact our customer support. 
                        </p>
                    </div>
                    <div>
                        <a href="/">
                            <button className="close-cert-btn">
                                CLOSE THE CERTIFICATE
                            </button>
                        </a>
                        <a href="/">
                            <button className="to-course-btn">
                                GO BACK TO COURSE
                            </button>
                        </a>
                    </div>
                </Container>
                <Footer/>
            </div>
        );
    }
}