import React, {Component} from "react";
import StarRating from "../course/StarRating";
import {Container} from "reactstrap";

export default class CourseBanner extends Component {
    /* Props:
       - title
       - desc
       - avgRatings
       - ratingCount
       - appliedCount
       - difficulty
       - domain
       - duration
       - creator 
       - lastUpdated
       - imgSrc
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