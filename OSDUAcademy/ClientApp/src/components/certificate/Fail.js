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
                <Container className="post-test-info">
                    <div className="congrats-box">
                        <h2>Congratulations!</h2>

                        <p>You have successfully passed the  </p>

                        <p>In order to get the certificate, you have to pass this test. You can choose to take it now or
                            leave it for later. In the case you want to take the test later – please return to the
                            course or home page.
                        </p>

                        <p>This test is made up of <strong>{this.state.data.questionCount}</strong> multiple-choice- and true/false questions. To get
                            a certificate you must have at least <strong>{Math.round(this.state.data.passRate * 100)} %</strong> of the test correct.
                        </p>

                        <p>When you are ready to begin the certification test – press <strong>TAKE THE TEST</strong></p>
                    </div>
                    <a href={"/certification/" + this.props.match.params.courseRoute}>
                        <button className="take-test-btn">
                            TAKE THE TEST
                        </button>
                    </a>
                </Container>
                <Footer/>
            </div>
        );
    }
}