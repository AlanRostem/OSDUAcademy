﻿import React, { Component } from "react"
import {Link, NavLink} from "react-router-dom";

export default class CourseCard extends Component {
    render() {
        return (
            <NavLink tag={Link} className="course-card" to={"/course-front-page/" + this.props.routeName}>
                <img src={process.env.PUBLIC_URL + "/thumbnails/courses/" + this.props.routeName + ".png"} alt={"Course: " + this.props.title}/>
                <h6>{this.props.title}</h6>
                <p className="dim-text">{this.props.desc}</p>
                <p><span className="difficulty-tag">{this.props.difficulty}</span></p>
            </NavLink>
        );
    }
}