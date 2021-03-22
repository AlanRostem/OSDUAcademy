import React, {Component} from "react";
import {Container} from "reactstrap";

/**
 * The component returns a banner with the most significant information about a specific course. It has to be used in the
 * "CourseFrontPage" component. The information is stored as the following properties:
 * - "title": a header with the course name
 * - "desc": a short description of the course
 * - "difficulty": a badge showing the level of difficulty. There are three levels: beginner, intermediate, advanced
 * - "duration": an approximation of how long does it take to complete the course
 */

    export default class CourseBanner extends Component {
    /* Props:
       - title
       - desc
       - difficulty
       - duration
    */

    render() {
        return (
            <div className="course-banner">
                <Container>
                    <div className="sub-container">
                        <h1>{this.props.title}</h1>
                        <p>{this.props.desc}</p>
                        <p className="line">
                            <span className="tags">
                                <span className="difficulty-tag">{this.props.difficulty}</span>
                            </span>
                        </p>
                        <p className="duration-tag">
                            <i className="fa fa-clock-o fa-2x"/>
                            {this.props.duration}
                        </p>
                    </div>
                </Container>
            </div>
        );
    }
}