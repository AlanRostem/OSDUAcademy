import React, {Component} from 'react';
import {Container} from "reactstrap";

export class SubmitButton extends Component {
    static displayName = SubmitButton.name;

    render() {
        return (
            <Container className="submit-cont">
                <a href="#">
                    <button className="submit-btn">SUBMIT</button>  
                </a>
            </Container>
        );
    }
}