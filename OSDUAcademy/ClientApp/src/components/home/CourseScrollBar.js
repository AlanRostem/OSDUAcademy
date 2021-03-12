import React, { Component } from "react"
import CourseScrollButton from "./CourseScrollButton";
import {Col, Container, Row} from "reactstrap";
import CourseScrollDot from "./CourseScrollDot";

export default class CourseScrollBar extends Component {
    dots = [];
    
    handleClick() {
        console.log("Clicked the scroll!");
    }
    
    render() {
        return (
            <div className="course-scroll-bar" onClick={this.handleClick.bind(this)}>
                <CourseScrollButton direction="left" />
                <div className="course-scroll-dot-container">
                    <CourseScrollDot />
                    <CourseScrollDot />
                    <CourseScrollDot />
                    <CourseScrollDot />
                    <CourseScrollDot />
                </div>
                <CourseScrollButton direction="right" />
            </div>
        );
    }
}