import React, { Component } from "react"

export default class CourseScrollButton extends Component {
    handleClick() {
        console.log("Clicked the scroll!");
    }
    
    render() {
        return (
            <div className="course-scroll-button" onClick={this.handleClick.bind(this)}>
                <i className={`fa fa-chevron-${this.props.direction} fa-2x`}/>
            </div>
        );
    }
}