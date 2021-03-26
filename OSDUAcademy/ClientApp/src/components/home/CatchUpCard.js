import React, {Component} from "react"
import {Link, NavLink} from "react-router-dom";

/**
 * The component returns a "card" that can be used as a child of the "CourseRow" component in the catch up with your 
 * work section at the home page when the user is logged in and at the active courses sections at the profile page. 
 * It includes an image of the completed course, in addition to the title and a "continue" button that takes 
 * the user to the course when clicked. Properties used in this component are: 
 * - routeName: the route for the course. Every course has a thumbnail image which is labeled with the route name.
 * - title: the title of the course. If the image is not shown, an alternate text with course title is used.
 */

export class CatchUpCard extends Component {
    static displayName = CatchUpCard.name;

    render() {
        return (
            <NavLink tag={Link} className="course-card" to={"/learn/" + this.props.routeName}>
                <img src={process.env.PUBLIC_URL + "/thumbnails/courses/" + this.props.routeName + ".png"}
                     alt={"Course: " + this.props.title}/>
                <h6>{this.props.title}</h6>
                <button className="catch-btn">CONTINUE</button>
            </NavLink>

        );
    }
}
