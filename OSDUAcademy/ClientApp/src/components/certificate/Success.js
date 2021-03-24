import React, {Component} from 'react';
import {Footer} from "../navbar/Footer";
import {Container} from "reactstrap";
import {CertificationNavMenu} from "../navbar/CertificationNavMenu";
import '../certificate/certificate.css'

/**
 * The component returns
 */

export class Success extends Component {
    static displayName = Success.name;

    render() {
        return (
            <div>
                <CertificationNavMenu/>
                <Container className="pre-test-info">
                    <div className="congrats-box">
                        <h2>Congratulations!</h2>

                        <h6>You have successfully passed the certification test and completed the "{this.props.course}" 
                            course! 
                        </h6>
                        
                        <p className="score">Your score is: 
                            <strong> {Math.round((this.props.right)/(this.props.questionCount) * 100)} %</strong></p>

                        <p>If you have any comments on the course layout and the content, please contact 
                            us. 
                        </p>
                    </div>
                    <a href="/home-li">
                        <button className="close-cert-btn">
                            CLOSE THE CERTIFICATE
                        </button>  
                    </a>
                </Container>
                <Footer/>
            </div>
        );
    }
}