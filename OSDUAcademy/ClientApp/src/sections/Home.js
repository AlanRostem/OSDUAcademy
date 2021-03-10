import React, {Component} from 'react';
import {DefaultNavMenu} from "../components/navbar/DefaultNavMenu";
import {Col, Container, Row} from "reactstrap";
import {CategoryNavBar} from "../components/navbar/CategoryNavBar";
import {CategoryItem} from "../components/navbar/CategoryItem";
import CourseCard from "../components/home/CourseCard";
import CourseRow from "../components/home/CourseRow";


export class Home extends Component {
    static displayName = Home.name;

    render() {
        return (
            <div>
                <DefaultNavMenu/>
                <Container>
                    <div className="banner" style={{backgroundImage: "url(" + process.env.PUBLIC_URL + "img/oil-rig.png"}}>
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
                                <div className="info"> <i className="fa fa-database fa-3x" aria-hidden="true"/>
                                    <h6>Specialized learning</h6>
                                    <p>Lorem ipsum something I don't know what to put here but it is important</p>
                                </div>
                            </div>
                            <div className="column">
                                <div className="info"> <i className="fa fa-graduation-cap fa-3x" aria-hidden="true"/>
                                    <h6>Teaching freedom</h6>
                                    <p>Lorem ipsum something I don't know what to put here but it is important</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <h1 style={{textAlign:"center"}}>Trending Courses</h1>
                    <p style={{textAlign:"center", color:"#7f7f7f"}}>Explore the most popular courses at OSDU Academy</p>
                    
                    <CategoryNavBar>
                        <CategoryItem text="Petroleum" itemActive={true}/>
                        <CategoryItem text="Geology" itemActive={false}/>
                        <CategoryItem text="Energy" itemActive={false}/>
                        <CategoryItem text="Gas" itemActive={false}/>
                        <CategoryItem text="Other" itemActive={false}/>
                    </CategoryNavBar>
                    <CourseRow>
                        <CourseCard
                            title="Advanced drilling engineering in a very high level"
                            desc="Learn about the most advanced drilling engineering in this course."
                            difficulty="Expert"
                            domain="Drilling"
                            imgSrc="img/course-drilling-test.png"
                            avgRating="5"
                            ratingCount="1997"
                        />
                        <CourseCard
                            title="Advanced drilling engineering"
                            desc="Learn about the most advanced drilling engineering in this course."
                            difficulty="Expert"
                            domain="Drilling"
                            imgSrc="img/course-drilling-test.png"
                            avgRating="5"
                            ratingCount="1997"
                        />
                        <CourseCard
                            title="Advanced drilling engineering"
                            desc="Learn about the most advanced drilling engineering in this course."
                            difficulty="Expert"
                            domain="Drilling"
                            imgSrc="img/course-drilling-test.png"
                            avgRating="5"
                            ratingCount="1997"
                        />
                        <CourseCard
                            title="Advanced drilling engineering"
                            desc="Learn about the most advanced drilling engineering in this course."
                            difficulty="Expert"
                            domain="Drilling"
                            imgSrc="img/course-drilling-test.png"
                            avgRating="5"
                            ratingCount="1997"
                        />
                        <CourseCard
                            title="Advanced drilling engineering"
                            desc="Learn about the most advanced drilling engineering in this course."
                            difficulty="Expert"
                            domain="Drilling"
                            imgSrc="img/course-drilling-test.png"
                            avgRating="5"
                            ratingCount="1997"
                        />
                        
                    </CourseRow>
                </Container>
            </div>
        );
    }
}
