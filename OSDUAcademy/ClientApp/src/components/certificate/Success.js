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
                    <div className="info-box">
                        <h2>Congratulations!</h2>

                        <h6>You have successfully passed the "{this.props.course}" certification test! </h6>
                        
                        <p className="score">Your score is:
                            <strong>{Math.round((this.props.right)/(this.props.questionCount) * 100)} %</strong></p>

                        <p>If you have any comments on the course layout and the content, please contact 
                            us. 
                        </p>
                        
                        <p>
                            
                        </p>
                    </div>
                </Container>
                <Footer/>
            </div>
        );
    }
}