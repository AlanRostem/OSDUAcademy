import React, { Component } from "react"
import CourseScrollButton from "./CourseScrollButton";
import {Container, Row} from "reactstrap";

export default class CourseScrollBar extends Component {
    render() {
        return (
            <Row>
                <CourseScrollButton direction="left" />
                <Container>
                    
                </Container>
                <CourseScrollButton direction="right" />
            </Row>
        );
    }
}