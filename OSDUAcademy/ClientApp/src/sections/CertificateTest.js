import React, {Component} from 'react';
import '../components/certificate/certificate.css'
import {TestBanner} from "../components/certificate/TestBanner";
import {TestBox} from "../components/certificate/TestBox";
import '../components/certificate/certificate.css'
import {Question} from "../components/certificate/Question";
import {Choice} from "../components/certificate/Choice";
import {Footer} from "../components/navbar/Footer";
import {SubmitButton} from "../components/certificate/SubmitButton";
import {CertificationNavMenu} from "../components/navbar/CertificationNavMenu";
import CertificationService from "../services/CertificationService";
import {Success} from "../components/certificate/Success";
import {Fail} from "../components/certificate/Fail";

/**
 * The component returns the certification test. The quiz is limited to one page, which allows the user to
 * go back to previous questions without changing the page. The component is used at the end of every course, and
 * is structured by using other components from "certificate" in addition to "DefaultNavMenu" and "Footer" components.
 */

export class CertificateTest extends Component {
    static displayName = CertificateTest.name;

    state = {
        questions: [],
        submitted: false,
        testResults: {}
    }

    answers = [];

    componentDidMount() {
        CertificationService.fetchAllQuestions(this.props.match.params.courseRoute, data => {
            this.setState({
                questions: data
            });
        });
    }

    handleSubmit(event) {
        CertificationService.submitAnswers(this.props.match.params.courseRoute, this.answers, data => {
            this.setState({
                submitted: true,
                testResults: data
            })
        });
    }

    showTest() {
        return <div>
            <TestBanner/>
            <TestBox>
                {
                    this.state.questions.map((question, i) => {
                        this.answers.push(-1);
                        return <Question
                            key={i}
                            questioncount={i + 1}
                            inquiry={question.questionText}>
                            {question.answers.map((answer, j) =>
                                <Choice
                                    key={j}
                                    optionid={j}
                                    name={"q" + i}
                                    onClick={event => {
                                        this.answers[i] = j;
                                    }}
                                >{answer}</Choice>
                            )}
                        </Question>
                    })
                }
            </TestBox>
            <SubmitButton onSubmit={this.handleSubmit.bind(this)}/>
        </div>;
    }

    render() {
        return (
            <div>
                <CertificationNavMenu/>
                {(() => {
                    if (!this.state.submitted) {
                        return this.showTest();
                    } else {
                        return this.state.testResults.passed ?
                            <Success correctAnswerRate={this.state.testResults.correctAnswerRate}/>
                            : <Fail correctAnswerRate={this.state.testResults.correctAnswerRate}/>
                    }
                })()}
                <Footer/>
            </div>
        );
    }
}