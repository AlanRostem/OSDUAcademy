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

    render() {
        return (
            <div>
                <DefaultNavMenu/>
                <TestBanner/>
                <TestBox>
                    <Question 
                    questioncount="1"
                    inquiry="Who let the dogs out?"
                    >
                        <Choice optionid="1" name="q1">Alan</Choice>
                        <Choice optionid="2" name="q1">Nemanja</Choice>
                        <Choice optionid="3" name="q1">Ahmed</Choice>
                        <Choice optionid="4" name="q1">All of the above</Choice>
                    </Question>
                    <Question
                        questioncount="2"
                        inquiry="What is wrong?"
                    >
                        <Choice optionid="1" name="q2">True</Choice>
                        <Choice optionid="2" name="q2">False</Choice>
                    </Question>
                    <Question
                        questioncount="3"
                        inquiry="Highly complex flow structures, water phase at the bottom of the pipe and dispersed oil phase in the uppermost level of the pipe are characteristics of what type of well?
"
                    >
                        <Choice optionid="1" name="q3">Deviated well</Choice>
                        <Choice optionid="2" name="q3">Near-horizontal well</Choice>
                        <Choice optionid="3" name="q3">Near-Vertical well</Choice>
                        <Choice optionid="4" name="q3">All of the above</Choice>
                    </Question>
                </TestBox>
                <SubmitButton/>
                <Footer/>
            </div>
        );
    }
}