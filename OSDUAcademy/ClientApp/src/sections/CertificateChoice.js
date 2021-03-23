import React, {Component} from 'react';
import {DefaultNavMenu} from "../components/navbar/DefaultNavMenu";
import {TestBanner} from "../components/certificate/TestBanner";
import '../components/certificate/certificate.css'
import {Footer} from "../components/navbar/Footer";
import {Container} from "reactstrap";
import CertificationService from "../services/CertificationService";

/**
 * The component is a parent component for "DefaultNavMenu" and "Footer" components. It allows a user decide
 * whether he/she continues to the final certification test or go back to the course/home page. This component, with
 * its children, provides crucial information before the user makes a selection.
 *
 * The container tag returns a container that includes a banner with information regarding the upcoming certification test and a button which
 * redirects a user to the certification test.
 */

export class CertificateChoice extends Component {
    static displayName = CertificateChoice.name;

    state = {
        loaded: false,
        data: {}
    }
    
    componentDidMount() {
        CertificationService.fetchQuestionsPreview(this.props.match.params.courseRoute, data => {
            this.setState({
                loaded: true,
                data: data
            })
        })
    }

    render() {
        if (!this.state.loaded)
            return (
                <div>

                </div>
            );
        
        return (
            <div>
                <DefaultNavMenu/>
                <TestBanner/>
                <Container className="pre-test-info">
                    <div className="info-box">
                        <h2>Hold on! You are about to take a test!</h2>

                        <p>Attention! The main objective of the course is to learn, not pass the test. Even that there
                            is
                            possibility to take the certification test without going through course content previously,
                            we strongly
                            advise you not to do so. You should be able to answer the questions based on your knowledge,
                            not the luck.
                            That is why you should check and learn the content of the course first. </p>

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