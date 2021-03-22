import React, {Component} from 'react';
import {DefaultNavMenu} from "../components/navbar/DefaultNavMenu";
import {TestBanner} from "../components/certificate/TestBanner";
import '../components/certificate/certificate.css'
import {PreTest} from "../components/certificate/PreTest";
import {Footer} from "../components/navbar/Footer";

export class CertificateChoice extends Component {
    static displayName = CertificateChoice.name;

    render() {
        return (
            <div>
                <DefaultNavMenu/>
                <TestBanner/>
                <PreTest number="10" percent="80"/>
                <Footer/>
            </div>
        );
    }
}