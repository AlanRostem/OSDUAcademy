import React, {Component} from 'react';
import VerticalDivider from "../navbar/VerticalDivider";

export class CourseContent extends Component {
    static displayName = CourseContent.name;

    render() {
        return (
            <div className="course-container">

                <div className="course-navigation">
                    <ul className="course-list">
                        <li> <a href="#"> <i className="fa fa-arrow-left"/> Previous</a> </li>
                        <li> <a href="#">Next <i className="fa fa-arrow-right" aria-hidden="true"/></a> </li>
                        <li className="divider"> | </li>
                        
                    </ul>
                </div>
                
                <div className="course-content">
                    {this.props.content}
                </div>
            </div>
        );
    }
}