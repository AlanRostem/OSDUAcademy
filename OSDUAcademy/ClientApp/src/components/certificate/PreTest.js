import React, {Component} from 'react';
import {Container} from "reactstrap";

export class PreTest extends Component {
    static displayName = PreTest.name;

    render() {
        return (
            <Container className="pre-test-info">
                <div className="info-box">
                    <h2>Hold on! You are about to take a test!</h2>
                    <p>In order to get the certificate, you have to pass this test. You can choose to take it now or leave it for later. In the case you want to take the test later – please return to the course or home page.
                    </p>

                    <p>This test is made up of <strong>{this.props.number}</strong> multiple-choice- and true/false questions. To get a certificate you must have at least <strong>{this.props.procent} %</strong> of the test correct.
                    </p>

                    <p>When you are ready to begin the certification test – press <strong>TAKE THE TEST</strong></p>
                </div>
                <a href="/certificate-test">
                    <button className="take-test-btn">
                        TAKE THE TEST
                    </button>
                </a>
            </Container>
        );
    }
}