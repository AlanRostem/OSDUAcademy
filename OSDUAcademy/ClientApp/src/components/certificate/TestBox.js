import React, {Component} from 'react';
import {Container} from "reactstrap";

/**
 * The component returns a field that includes all the questions in the quiz. It has to be used in "CertificateTest" 
 * component. 
 */

export class TestBox extends Component {
    static displayName = TestBox.name;

    render() {
        return (
            <Container className="test-box">
                {this.props.children}
            </Container>
        );
    }
}