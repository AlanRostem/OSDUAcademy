import React, { Component } from "react"
import CourseScrollButton from "./CourseScrollButton";
import CourseScrollDot from "./CourseScrollDot";

export default class CourseScrollBar extends Component {
    dots = [];

    constructor(props) {
        super(props);
        this.calibrateDotCount(props.courseCount || 0, props.courseContainerWidth);
    }
    
    calibrateDotCount(courseCount, courseContainerWidth) {
        let courseTotalWidth = courseCount * 240;
        let pageCount = Math.ceil(courseTotalWidth / courseContainerWidth);
        
        this.dots = [];
        for (let i = 0; i < pageCount; i++) {
            this.dots.push(<CourseScrollDot key={i} />);
        }
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