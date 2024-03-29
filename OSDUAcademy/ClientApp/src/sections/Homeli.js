import React, {Component} from 'react';
import UserService from "../services/UserService";
import {Container} from "reactstrap";
import {CategoryNavBar} from "../components/navbar/CategoryNavBar";
import {CategoryItem} from "../components/navbar/CategoryItem";
import CourseRow from "../components/home/CourseRow";
import {Footer} from "../components/navbar/Footer";
import {DefaultNavMenu} from "../components/navbar/DefaultNavMenu";
import {Redirect} from "react-router-dom";


/**
 * The component checks whether the user is logged in or not. If the user is logged in, the component returns the home
 * page slightly different from one when the user is not logged in. It includes a welcome back banner with
 * personalized message. There is an element with previously taken courses the user can
 * keep working on and a list with trending courses in the main part of the page.
 */

export class Homeli extends Component {
    static displayName = Homeli.name;

    render() {
        if (!UserService.isLoggedIn())
            return <Redirect push to="/"/>;
        return (
            <div>
                <DefaultNavMenu/>
                <Container>
                    <div className="banner-li" style={{backgroundImage: "url(" + process.env.PUBLIC_URL + "img/oil-rig.png", 
                    height:"150px", textAlign:"center", color:"white"}}>
                        <h1 style={{fontWeight:"bold", paddingTop:"30px"}}>Welcome back!</h1>
                        <p>Greetings, {UserService.getUser().firstName}. It's good to see you again!</p>
                    </div>

                    <h1 className="home-h1">Catch up on your learning</h1>
                    <hr style={{marginBottom: "15px"}}/>
                    <CourseRow fetchEnrolledUserCourses={true} />
                    
                    <h1 className="home-h1">Trending Courses</h1>
                    <CategoryNavBar>
                        <CategoryItem itemActive={true} componentToShow={<CourseRow searchByTrending={true}/>}>ALL</CategoryItem>
                        <CategoryItem itemActive={false} componentToShow={<CourseRow domainToSearchBy={"geology"}/>}>GEOLOGY</CategoryItem>
                        <CategoryItem itemActive={false} componentToShow={<CourseRow domainToSearchBy={"petroleum"}/>}>PETROLEUM</CategoryItem>
                        <CategoryItem itemActive={false} componentToShow={<CourseRow domainToSearchBy={"software"}/>}>SOFTWARE</CategoryItem>
                        <CategoryItem itemActive={false} componentToShow={<CourseRow domainToSearchBy={"gas"}/>}>GAS</CategoryItem>
                    </CategoryNavBar>

                </Container>
                <Footer/>
            </div>
        );
    }
}