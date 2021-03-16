import React, {Component} from 'react';
import {Container} from "reactstrap";
import {Footer} from "../components/navbar/Footer";
import {CourseContent} from "../components/course-interface/CourseContent";
import {CourseNavMenu} from "../components/navbar/CourseNavMenu";
import '../components/course-interface/courseInterface.css'
import {CourseSideBar} from '../components/course-interface/CourseSideBar'

export class CourseInterface extends Component {
    static displayName = CourseInterface.name;

    render() {
        return (
            <div>
                <CourseNavMenu/>
                
                <CourseContent/>
                
                <Footer/>
            </div>
        );
    }
}