import React, {Component} from "react"
import {Link, NavLink} from "react-router-dom";

/**
 *
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
