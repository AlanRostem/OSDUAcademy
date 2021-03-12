import React, { Component } from "react"
import {Container, Row} from "reactstrap";
import CourseScrollButton from "./CourseScrollButton";
import CourseScrollBar from "./CourseScrollBar";

export default class CourseRow extends Component {
    render() {
        return (
            <div>
                <Row className="course-row">
                    {this.props.children}
                </Row>
                <CourseScrollBar />
            </div>
        );
    }
}