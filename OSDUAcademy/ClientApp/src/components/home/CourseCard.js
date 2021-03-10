import React, { Component } from "react"
import {Col} from "reactstrap";

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
            <div className="course-card">
                <img style={{width: "240px", height: "135px"}} src={process.env.PUBLIC_URL + "/" + this.props.imgSrc} alt={"Course: " + this.props.title}/>
                <h6>{title}</h6>
                <p className="dim-text">{this.props.desc}</p>
                <p><span className="difficulty-tag">{this.props.difficulty}</span><span className="domain-tag">{this.props.domain}</span></p>
            </div>
        );
    }
}