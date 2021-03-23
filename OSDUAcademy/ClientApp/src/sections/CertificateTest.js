import React, {Component} from 'react';
import '../components/certificate/certificate.css'
import {DefaultNavMenu} from "../components/navbar/DefaultNavMenu";
import {TestBanner} from "../components/certificate/TestBanner";
import {TestBox} from "../components/certificate/TestBox";
import '../components/certificate/certificate.css'
import {Question} from "../components/certificate/Question";
import {Choice} from "../components/certificate/Choice";
import {Footer} from "../components/navbar/Footer";
import {SubmitButton} from "../components/certificate/SubmitButton";

/**
 * The component returns the certification test. The quiz is limited to one page, which allows the user to
 * go back to previous questions without changing the page. The component is used at the end of every course, and
 * is structured by using other components from "certificate" in addition to "DefaultNavMenu" and "Footer" components.
 */

export class CertificateTest extends Component {
    static displayName = CertificateTest.name;

    state = {
        questions: []
    }

    componentDidMount() {
        fetch("/certification/" + this.props.match.params.courseRoute + "/content/questions")
            .then(response => response.json())
            .then(data => {
                this.setState({
                    questions: data
                })
            })
    }

    render() {
        return (
            <div>
                <DefaultNavMenu/>
                <TestBanner/>
                <TestBox>
                    {
                        this.state.questions.map((question, i) =>
                            <Question
                                key={i}
                                questioncount={i+1}
                                inquiry={question.questionText}>
                                {question.answers.map((answer, j) =>
                                    <Choice key={j} optionid={j} name={"q" + i}>{answer}</Choice>
                                )}
                            </Question>)
                    }
                </TestBox>
                <SubmitButton/>
                <Footer/>
            </div>
        );
    }
}