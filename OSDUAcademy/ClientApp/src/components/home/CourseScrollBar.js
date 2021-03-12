import React, { Component } from "react"
import CourseScrollButton from "./CourseScrollButton";
import {Col, Container, Row} from "reactstrap";
import CourseScrollDot from "./CourseScrollDot";

export default class CourseScrollBar extends Component {
    dots = [
        <CourseScrollDot />,
        <CourseScrollDot />,
        <CourseScrollDot />,
        <CourseScrollDot />,
    ];

    constructor(props) {
        super(props);
        this.calibrateDotCount(props.courseCount || 0, props.courseContainerWidth || 1);
    }
    
    calibrateDotCount(courseCount, courseContainerWidth) {
        let courseTotalWidth = courseCount * 240;
        let pageCount = Math.ceil(courseTotalWidth / courseContainerWidth);
        this.state = {
            pageCount: pageCount,
            courseContainerWidth: courseContainerWidth
        };
    }
    
    componentDidMount() {
        
    }

    render() {
        return (
            <div className="course-scroll-bar">
                <CourseScrollButton direction="left" />
                <div className="course-scroll-dot-container">
                    {this.dots}
                </div>
                <CourseScrollButton direction="right" />
            </div>
        );
    }
}