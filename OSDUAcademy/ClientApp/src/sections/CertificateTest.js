import React, {Component} from 'react';
import '../components/certificate/certificate.css'
import {DefaultNavMenu} from "../components/navbar/DefaultNavMenu";
import {TestBanner} from "../components/certificate/TestBanner";
import {TestBox} from "../components/certificate/TestBox";
import '../components/certificate/certificate.css'

export class CertificateTest extends Component {
    static displayName = CertificateTest.name;

    render() {
        return (
            <div>
                <DefaultNavMenu/>
                <TestBanner/>
                <TestBox>
                    coming up
                </TestBox>
            </div>
        );
    }
}