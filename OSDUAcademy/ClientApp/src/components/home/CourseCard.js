import React, { Component } from "react"
import {Link, NavLink} from "react-router-dom";
import StarRating from "../course/StarRating";

export default class CourseCard extends Component {
    render() {
        return (
            <NavLink tag={Link} className="course-card" to="/course-front-page">
                <img src={process.env.PUBLIC_URL + "/" + this.props.imgSrc} alt={"Course: " + this.props.title}/>
                <h6>{this.props.title}</h6>
                <p className="dim-text">{this.props.desc}</p>
                <p><span className="difficulty-tag">{this.props.difficulty}</span></p>
            </NavLink>
        );
    }
}