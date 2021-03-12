import React, { Component } from "react"

export default class CourseScrollButton extends Component {
    render() {
        return (
            <div className="course-scroll-button" onClick={this.props.onClick}>
                <i className={`fa fa-chevron-${this.props.direction} fa-2x`}/>
            </div>
        );
    }
}