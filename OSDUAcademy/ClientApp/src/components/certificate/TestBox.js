import React, {Component} from 'react';
import {Container} from "reactstrap";

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