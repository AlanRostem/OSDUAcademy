import React, {Component} from "react";

/**
 * The component returns a textual content for the course. It is set to be used by the OSDU Academy teaching
 * community when making a course and its content and is shown as a child of the "Content" component.
 */

 

export default class Paragraph extends Component {
    render() {
        return (
            <p>
                {this.props.children}
            </p>
        );
    }
}