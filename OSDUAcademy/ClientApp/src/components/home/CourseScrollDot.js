import React, { Component } from "react"

export default class CourseScrollDot extends Component {
    static dotColor = "#2c5385"
    
    render() {
        return  (
            <div className="course-scroll-dot" style={{backgroundColor: this.props.isHighlighted ? CourseScrollDot.dotColor : "none"}} />  
        );
    }
}