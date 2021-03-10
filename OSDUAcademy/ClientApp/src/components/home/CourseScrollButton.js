import React, { Component } from "react"

export default class CourseScrollButton extends Component {
    render() {
        return (
            <div className="course-scroll-button">
                <i className="fa fa-chevron-right fa-3x" style={{top: "50%"}}/>
            </div>
        );
    }
}