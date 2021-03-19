import React, {Component} from 'react';
import {CourseContent} from "../components/course-interface/CourseContent";
import {CourseNavMenu} from "../components/navbar/CourseNavMenu";
import '../components/course-interface/courseInterface.css'

export class CourseInterface extends Component {
    static displayName = CourseInterface.name;

    render() {
        return (
            <div className="interface-container">
                <CourseNavMenu/>
                <CourseContent content={`
                    <h1>Welcome to this course!</h1>
                    <p>This is a paragraph!</p>
                `}/>
            </div>
        );
    }
}