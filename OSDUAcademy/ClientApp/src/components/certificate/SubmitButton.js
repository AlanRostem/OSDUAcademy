import React, {Component} from 'react';
import {Container} from "reactstrap";

/**
 * The component returns a standardized button with only one purpose - to submit the final certification test. It 
 * has to be used in the "CertificationTest" component at the end of the quiz. 
 */

export class SubmitButton extends Component {
    static displayName = SubmitButton.name;

    render() {
        return (
            <Container className="submit-cont">
                <p href="#">
                    <button className="submit-btn" onClick={this.props.onSubmit}>SUBMIT</button>  
                </p>
            </Container>
        );
    }
}