import React, {Component} from "react"

/**
 * The component returns a "card" that can be used as a child of the "CourseRow" component in the completed courses
 * section at the profile page. It includes an image of the completed course, in addition to the title and a "tag"
 * showing that the user has been certified in it. Properties used in this component are:
 * - routeName: the route for the course. Every course has a thumbnail image which is labeled with the route name.
 * - title: the title of the course. If the image is not shown, an alternate text with course title is used.
 */

export class CompletedCourseCard extends Component {
    static displayName = CompletedCourseCard.name;

    render() {
        return (
            <div className="course-card" >
                <img src={process.env.PUBLIC_URL + "/thumbnails/courses/" + this.props.routeName + ".png"}
                     alt={"Course: " + this.props.title}/>
                <h6>{this.props.title}</h6>
                <button disabled={true} className="certified-btn">CERTIFIED</button>
            </div>
        );
    }
}