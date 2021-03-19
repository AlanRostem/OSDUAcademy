import React, {Component} from 'react';
import {Container} from "reactstrap";
import {DefaultNavMenu} from "../components/navbar/DefaultNavMenu";
import {TestBanner} from "../components/certificate/TestBanner";
import '../components/certificate/certificate.css'

export class CertificateChoice extends Component {
    static displayName = CertificateChoice.name;

    render() {
        return (
            <div>
                <DefaultNavMenu/>
                <Container>
                    <TestBanner/>

                </Container>
            </div>
        );
    }
}