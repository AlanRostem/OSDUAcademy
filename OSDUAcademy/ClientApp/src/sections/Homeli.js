import React, {Component} from 'react';
import UserService from "../services/UserService";

import {Container} from "reactstrap";
import {CategoryNavBar} from "../components/navbar/CategoryNavBar";
import {CategoryItem} from "../components/navbar/CategoryItem";
import CourseCard from "../components/home/CourseCard";
import CourseRow from "../components/home/CourseRow";
import {Footer} from "../components/navbar/Footer";
import {DefaultNavMenu} from "../components/navbar/DefaultNavMenu";

export class Homeli extends Component {
    static displayName = Homeli.name;

    render() {
        return (
            <div>
                <DefaultNavMenu/>
                <Container>
                    <div className="banner-li" style={{backgroundImage: "url(" + process.env.PUBLIC_URL + "img/oil-rig.png", 
                    height:"150px", textAlign:"center", color:"white"}}>
                        <h1 style={{fontWeight:"bold", paddingTop:"30px"}}>Welcome back!</h1>
                        <p>Greetings, {UserService.getUser().firstName}. It's good to see you again</p>
                    </div>

                    <h1 className="home-h1">Catch up on your learning</h1>
                    <hr style={{marginBottom: "15px"}}/>
                    <CourseRow>
                        
                    </CourseRow>
                    
                    <h1 className="home-h1">Trending Courses</h1>
                    <CategoryNavBar>
                        <CategoryItem itemActive={true}>PETROLEUM</CategoryItem>
                        <CategoryItem itemActive={false}>GEOLOGY</CategoryItem>
                        <CategoryItem itemActive={false}>ENERGY</CategoryItem>
                        <CategoryItem itemActive={false}>GAS</CategoryItem>
                        <CategoryItem itemActive={false}>OTHER</CategoryItem>
                    </CategoryNavBar>
                    <CourseRow searchByTrending={true} />
                </Container>
                <Footer/>
            </div>
        );
    }
}