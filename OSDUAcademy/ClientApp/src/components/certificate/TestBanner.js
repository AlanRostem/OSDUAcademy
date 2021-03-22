import React, {Component} from 'react';
import {Container} from "reactstrap";

/**
 * The component returns a banner showing the start of certification process and a go-back-to-course button.
 */

export class TestBanner extends Component {
    static displayName = TestBanner.name;

    render() {
        return (
            <div className="certificate-banner">
                <Container className="certificate-container">
                    <h1>Certificate</h1>
                    <a href="/"><i className="fa fa-chevron-left" aria-hidden="true"/> Course </a>
                </Container>
            </div>
        );
    }
}