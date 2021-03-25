import React, { Component } from 'react';
import {DefaultNavMenu} from "../components/navbar/DefaultNavMenu";
import {Footer} from "../components/navbar/Footer";
import {Container} from "reactstrap";
import UserService from "../services/UserService"
import {CategoryItem} from "../components/navbar/CategoryItem";
import CourseRow from "../components/home/CourseRow";
import {CategoryNavBar} from "../components/navbar/CategoryNavBar";

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
                    
                    <br/>

                    <h5 className="profile-h courses-h"> Courses </h5>
                    <CategoryNavBar>
                        <CategoryItem itemActive={true} componentToShow={<CourseRow searchByTrending={true}/>}>ACTIVE</CategoryItem>
                        <CategoryItem itemActive={false} componentToShow={<CourseRow domainToSearchBy={"geology"}/>}>COMPLETED</CategoryItem>
                    </CategoryNavBar>
                    
                </Container>
                <Footer/>
            </div>
        );
    }
}