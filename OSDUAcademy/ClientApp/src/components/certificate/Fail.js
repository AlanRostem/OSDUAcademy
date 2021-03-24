import React, {Component} from 'react';
import {Container} from "reactstrap";
import '../certificate/certificate.css'
import LearningService from "../../services/LearningService";
import {Link} from "react-router-dom";

/**
 * The component returns a box with information if the user has not passed the test. It includes information
 * such as what the user should do next, in addition to the score achieved. Below the box, there are two buttons
 * that can take user back to the course or home page. It is used as a result of submitting the quiz in
 * "CertificateTest" component.
 */

export class Fail extends Component {
    static displayName = Fail.name;

    render() {
        return (
            <Container className="pre-test-info">
                <div className="sorry-box">
                    <h2>Unfortunately, </h2>

                    <h6>You have not passed the certification test.
                    </h6>

                    <p className="score">Your score is:
                        <strong> {Math.round(this.props.correctAnswerRate * 100)} %</strong></p>

                    <p>
                        To succesfully complete the course, you have to pass the certification test. We strongly
                        recommend you to check the course content once again and make sure that you understand.
                    </p>

                    <p>If you think that there was a mistake in the quiz, please contact our customer support.
                    </p>
                </div>
                <div>
                    <Link to="/home-li">
                        <button className="close-cert-btn">
                            HOME
                        </button>
                    </Link>
                    <Link to={"/learn/" + LearningService.getCurrentCourseRoute()}>
                        <button className="to-course-btn">
                            GO BACK TO COURSE
                        </button>
                    </Link>
                </div>
            </Container>
        );
    }
}