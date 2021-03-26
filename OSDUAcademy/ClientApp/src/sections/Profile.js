import React, { Component } from 'react';
import {DefaultNavMenu} from "../components/navbar/DefaultNavMenu";
import {Footer} from "../components/navbar/Footer";
import {Container} from "reactstrap";
import UserService from "../services/UserService"
import CourseRow from "../components/home/CourseRow";
import {CompletedCourseCard} from "../components/home/CompletedCourseCard";


/**
 * The component returns
 */

export class Profile extends Component {
    static displayName = Profile.name;

    render () {
        return (
            <div>
                <DefaultNavMenu/>
                <Container className="profile-container">
                    <ul className="profile-list">
                        <li className="user-data">
                            <h5 className="profile-h"> User information </h5>
                            <form className="profile-form">
                                <div className="profile-info">
                                    <label>Name: </label>
                                    <input type="text" value={UserService.getUser().firstName + " " + UserService.getUser().lastName} readOnly/>
                                </div>
                                <div className="profile-info">
                                    <label>Email: </label>
                                    <input type="text" value={UserService.getUser().email} readOnly/>
                                </div>
                            </form>
                        </li>
                        <li className="user-courses">
                            <h5 className="profile-h">Active Courses</h5>
                            <CourseRow fetchEnrolledUserCourses={true} />
                            <br/>
                            <h5 className="profile-h">Completed Courses</h5>
                            <CourseRow testingEnabled={true}>
                                <CompletedCourseCard title="Techlog bla bla" routeName="techlog-tutorial"/>
                            </CourseRow>
                        </li>
                    </ul>
                </Container>
                <Footer/>
            </div>
        );
    }
}