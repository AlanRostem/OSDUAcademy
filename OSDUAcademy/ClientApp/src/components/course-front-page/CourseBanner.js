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
                            <a href="/">Read Reviews</a>
                            <StarRating value={this.props.avgRating} count={this.props.ratingCount}/>
                            <span className="dim-text">{this.props.appliedCount} Applied</span>
                            <span className="tags">
                            <span className="difficulty-tag">{this.props.difficulty}</span>
                            <span className="domain-tag">{this.props.domain}</span>
                        </span>
                        </p>
                        <p className="line"> Created by <a href="/">{this.props.creator}</a></p>
                        <p className="line">
                            Last updated: {this.props.lastUpdated}
                        </p>
                    </div>
                </Container>
            </div>
        );
    }
}