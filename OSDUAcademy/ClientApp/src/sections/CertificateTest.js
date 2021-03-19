import React, {Component} from 'react';
import '../components/certificate/certificate.css'
import {DefaultNavMenu} from "../components/navbar/DefaultNavMenu";
import {TestBanner} from "../components/certificate/TestBanner";
import {TestBox} from "../components/certificate/TestBox";
import '../components/certificate/certificate.css'
import {Question} from "../components/certificate/Question";
import {Choice} from "../components/certificate/Choice";

export class CertificateTest extends Component {
    static displayName = CertificateTest.name;

    render() {
        return (
            <div>
                <DefaultNavMenu/>
                <TestBanner/>
                <TestBox>
                    <Question 
                    questionnr="1"
                    inquiry="Who let the dogs out?"
                    >
                        <Choice optionid="1" name="q1">Alan</Choice>
                        <Choice optionid="2" name="q1">Nemanja</Choice>
                        <Choice optionid="3" name="q1">Ahmed</Choice>
                        <Choice optionid="4" name="q1">All of the above</Choice>
                    </Question>
                </TestBox>
            </div>
        );
    }
}