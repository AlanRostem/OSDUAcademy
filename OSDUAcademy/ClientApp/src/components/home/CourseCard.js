import React, { Component } from "react"
import {Link, NavLink} from "react-router-dom";
import StarRating from "../course/StarRating";

export default class CourseCard extends Component {
    render() {
        let title = this.props.title;
        if (title.length > 60) { // TODO: Fix this character limit
            let old = title;
            title = "";
            for (let i = 0; i < 57; i++)
                title += old[i];
            title += "...";
        }
        return (
            <NavLink tag={Link} className="course-card" to="/">
                <img src={process.env.PUBLIC_URL + "/" + this.props.imgSrc} alt={"Course: " + this.props.title}/>
                <h6>{title}</h6>
                <p className="dim-text">{this.props.desc}</p>
                <StarRating value={2} count={1997}/>
                <p><span className="difficulty-tag">{this.props.difficulty}</span><span className="domain-tag">{this.props.domain}</span></p>
            </NavLink>
        );
    }
}