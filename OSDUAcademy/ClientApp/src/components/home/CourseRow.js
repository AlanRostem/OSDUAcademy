import React, { Component } from "react"
import {Row} from "reactstrap";
import CourseScrollButton from "./CourseScrollButton";

export default class CourseRow extends Component {
    render() {
        return (
            <div>
                <Row className="course-row">
                    {this.props.children}
                </Row>
            </div>
        );
    }
}