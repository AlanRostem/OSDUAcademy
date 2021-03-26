import React, {Component} from "react";

/**
 * The component returns the header of the lecture. It is set to be used by the OSDU Academy teaching
 * community when making a course and its content and is shown as a child of the "Content" component.
 */

export default class Title extends Component {
    render() {
        return (
            <h1>
                {this.props.children}
            </h1>
        );
    }
}