import React, { Component } from 'react';
import {DefaultNavMenu} from "../components/navbar/DefaultNavMenu";
import {Footer} from "../components/navbar/Footer";
import {Container} from "reactstrap";
import UserService from "../services/UserService"
import CourseRow from "../components/home/CourseRow";
import {CompletedCourseCard} from "../components/home/CompletedCourseCard";

/**
 * The component returns the user profile page. The page is divided into two main parts. On the left side, there 
 * is personal user information (name and email) and on the right side there are two horizontal carousels. The upper one
 * shows the active courses and the lower one the courses the user has completed. 
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
                            <button className="log-out-btn">Log out</button>
                        </li>
                        <li className="user-courses">
                            <h5 className="profile-h">Active Courses</h5>
                            <CourseRow fetchEnrolledUserCourses={true} />
                            <br/>
                            <h5 className="profile-h">Completed Courses</h5>
                            <CourseRow fetchCompletedCourses={true} />
                        </li>
                    </ul>
                </Container>
                <Footer/>
            </div>
        );
    }
}