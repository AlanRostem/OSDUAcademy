import React, {Component} from "react"
import {Link, NavLink} from "react-router-dom";

/**
 *
 */

export class CompletedCourseCard extends Component {
    static displayName = CompletedCourseCard.name;

    render() {
        return (
            <div className="course-card" >
                <img src={process.env.PUBLIC_URL + "/thumbnails/courses/" + this.props.routeName + ".png"}
                     alt={"Course: " + this.props.title}/>
                <h6>{this.props.title}</h6>
                <button disabled={true} className="certified-btn">CERTIFIED</button>
            </div>
        );
    }
}