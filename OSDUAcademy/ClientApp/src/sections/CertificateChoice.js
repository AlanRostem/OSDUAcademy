import React, {Component} from 'react';
import {DefaultNavMenu} from "../components/navbar/DefaultNavMenu";
import {TestBanner} from "../components/certificate/TestBanner";
import '../components/certificate/certificate.css'
import {PreTest} from "../components/certificate/PreTest";
import {Footer} from "../components/navbar/Footer";

/**
 * The component is a parent component for "PreTest", "DefaultNavMenu" and "Footer" components. It allows a user decide
 * whether he/she continues to the final certification test or go back to the course/home page. This component, with 
 * its children, provides crucial information before the user makes a selection. 
 */

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