import React, { Component } from "react"
import {Link, NavLink} from "react-router-dom";

/**
 * The component returns a card for a specific course, included most important information such as course title, 
 * description and difficulty. It also serves as a link to the course front page. The component is used in the 
 * "CourseRow" component. 
 * 
 * Properties used: 
 * - "routeName": the additional part to the route, specifies a particular course
 * - "title": the title of the course
 * - "desc": a short description
 * - "difficulty": a level of difficulty: beginner, intermediate or advanced. 
 */

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