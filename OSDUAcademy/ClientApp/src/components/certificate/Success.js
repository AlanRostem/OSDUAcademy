import React, {Component} from 'react';
import {Footer} from "../navbar/Footer";
import {Container} from "reactstrap";
import {CertificationNavMenu} from "../navbar/CertificationNavMenu";
import '../certificate/certificate.css'

/**
 * The component returns a box with information if the user has successfully passed the test. It includes information
 * such as what the user can do next, in addition to the score achieved. Below the box, there is a button
 * that re-redirects user to the home page. It is used as a result of submitting the quiz in "CertificateTest"
 * component.
 */

export class Success extends Component {
    static displayName = Success.name;

    render() {
        return (
            <Container className="pre-test-info">
                <div className="congrats-box">
                    <h2>Congratulations!</h2>

                    <h6>You have successfully passed the certification test and completed the course!</h6>

                    <p className="score">Your score is:
                        <strong> {Math.round(this.props.correctAnswerRate * 100)} %</strong></p>

                    <p>If you have any comments on the course layout and the content, please contact us.</p>
                </div>
                <a href="/home-li">
                    <button className="close-cert-btn">
                        CLOSE THE CERTIFICATE
                    </button>
                </a>
            </Container>
        );
    }
}