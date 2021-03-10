import React, { Component } from "react"
import {Row} from "reactstrap";

export default class CourseRow extends Component {
    render() {
        return (
            <Row className="course-row">
                {this.props.children}
            </Row>
        );
    }
}