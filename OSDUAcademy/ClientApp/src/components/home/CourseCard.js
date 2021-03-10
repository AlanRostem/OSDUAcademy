import React, { Component } from "react"
import {Col} from "reactstrap";

export default class CourseCard extends Component {
    render() {
        return (
            <div className="course-card">
                <img style={{width: "240px", height: "135px"}} src={process.env.PUBLIC_URL + "/" + this.props.imgSrc} alt={"Course: " + this.props.title}/>
                <h6>{this.props.title}</h6>
                <p className="dim-text">{this.props.desc}</p>
                <p><span className="difficulty-tag">{this.props.difficulty}</span><span className="domain-tag">{this.props.domain}</span></p>
            </div>
        );
    }
}