import React, {Component} from 'react';
import {DefaultNavMenu} from "../components/navbar/DefaultNavMenu";
import {Container} from "reactstrap";
import {CategoryNavBar} from "../components/navbar/CategoryNavBar";
import {CategoryItem} from "../components/navbar/CategoryItem";
import CourseRow from "../components/home/CourseRow";
import {Footer} from "../components/navbar/Footer";
import UserService from "../services/UserService";
import {Redirect} from "react-router-dom";

/**
 * The component returns the home page, shown when the user launches the application and is not logged in. It
 * includes the default navigation menu with its functionality, the information banner, and a list of trending courses.
 * One can navigate the list by using chevrons below it. Users can filter the courses using a horizontal category
 * navigation menu, which includes the main categories in the oil and gas industry.
 */

export class Home extends Component {
    static displayName = Home.name;
    
    render() {
        if (UserService.isLoggedIn())
            return <Redirect to="/home-li"/>
        
        return (
            <div>
                <DefaultNavMenu/>
                <Container>
                    <div className="banner"
                         style={{backgroundImage: "url(" + process.env.PUBLIC_URL + "img/oil-rig.png"}}>
                        <h1>Grow your career skills</h1>
                        <p>Explore a world of courses at OSDU Academy to find your perfect suit free of charge</p>

                        <div className="row">
                            <div className="column">
                                <div className="info"><i className="fa fa-desktop fa-3x" aria-hidden="true"/>
                                    <h6>Open Source</h6>
                                    <p>Lorem ipsum something I don't know what to put here but it is important</p>
                                </div>
                            </div>
                            <div className="column">
                                <div className="info"><i className="fa fa-database fa-3x" aria-hidden="true"/>
                                    <h6>Specialized learning</h6>
                                    <p>Lorem ipsum something I don't know what to put here but it is important</p>
                                </div>
                            </div>
                            <div className="column">
                                <div className="info"><i className="fa fa-graduation-cap fa-3x" aria-hidden="true"/>
                                    <h6>Teaching freedom</h6>
                                    <p>Lorem ipsum something I don't know what to put here but it is important</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <h1 style={{textAlign: "center", paddingTop: "50px"}}>Trending Courses</h1>
                    <p style={{textAlign: "center", color: "#7f7f7f"}}>Find the most popular courses at OSDU Academy</p>

                    <CategoryNavBar>
                        <CategoryItem itemActive={true}
                                      componentToShow={<CourseRow searchByTrending={true}/>}>PETROLEUM</CategoryItem>
                        <CategoryItem itemActive={false} componentToShow={<CourseRow/>}>GEOLOGY</CategoryItem>
                        <CategoryItem itemActive={false} componentToShow={<CourseRow/>}>ENERGY</CategoryItem>
                        <CategoryItem itemActive={false} componentToShow={<CourseRow/>}>GAS</CategoryItem>
                        <CategoryItem itemActive={false} componentToShow={<CourseRow/>}>OTHER</CategoryItem>
                    </CategoryNavBar>

                </Container>
                <Footer/>
            </div>
        );
    }
}
