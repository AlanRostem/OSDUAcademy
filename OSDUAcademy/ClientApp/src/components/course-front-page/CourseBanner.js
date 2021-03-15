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
                    
                <h1>{this.props.title}</h1>
                <p>{this.props.desc}</p>
                <p className="line">
                    <a href="/">Read Reviews</a>
                    <StarRating value={this.props.avgRating} count={this.props.ratingCount}/>
                    <span className="dim-text">{this.props.appliedCount} Applied</span>
                </p>
                </Container>
            </div>
        );
    }
}