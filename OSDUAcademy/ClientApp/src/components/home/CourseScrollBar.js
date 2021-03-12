import React, {Component} from "react"
import CourseScrollButton from "./CourseScrollButton";
import CourseScrollDot from "./CourseScrollDot";

export default class CourseScrollBar extends Component {
    static dotColor = "#2c5385"
    dots = [];

    constructor(props) {
        super(props);
        this.calibrateDotCount(props.courseCount || 0, props.courseContainerWidth);
        this.state = {currentDot: 0};
    }

    calibrateDotCount(courseCount, courseContainerWidth) {
        let courseTotalWidth = courseCount * 240;
        let pageCount = Math.ceil(courseTotalWidth / courseContainerWidth);

        this.dots = [true];
        for (let i = 1; i < pageCount; i++) {
            this.dots.push(false);
        }
    }
    
    switchDot(direction) {
        let currentDot = this.state.currentDot + direction;
        
        let pageCount = this.dots.length;
        
        if (currentDot === -1)
            currentDot = this.dots.length - 1;
        else if (currentDot === this.dots.length)
            currentDot = 0;
        
        this.dots = [];
        for (let i = 0; i < pageCount; i++) {
            this.dots.push(i === currentDot);
        }

        this.setState({ currentDot: currentDot});
    }

    goLeft() {
      this.switchDot(-1);
    }

    goRight() {
        this.switchDot(1);
    }

    render() {
        return (
            <div className="course-scroll-bar">
                <CourseScrollButton direction="left" onClick={this.goLeft.bind(this)}/>
                <div className="course-scroll-dot-container">
                    {this.dots.map((isHighlighted, i) => {
                        return <CourseScrollDot
                            key={i}
                            style={{backgroundColor: isHighlighted ? CourseScrollBar.dotColor : "none"}}
                        />
                    })}
                </div>
                <CourseScrollButton direction="right" onClick={this.goRight.bind(this)}/>
            </div>
        );
    }
}