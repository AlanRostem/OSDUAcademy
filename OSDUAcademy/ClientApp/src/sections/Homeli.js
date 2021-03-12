import React, {Component} from 'react';
import {DefaultNavMenu} from "../components/navbar/DefaultNavMenu";
import {Col, Container, Row} from "reactstrap";
import {CategoryNavBar} from "../components/navbar/CategoryNavBar";
import {CategoryItem} from "../components/navbar/CategoryItem";
import CourseCard from "../components/home/CourseCard";
import CourseRow from "../components/home/CourseRow";

export class Homeli extends Component {
    static displayName = Homeli.name;

    render() {
        return (
            <div>
                <DefaultNavMenu/>
                <Container>
                    <div className="banner-li" style={{backgroundImage: "url(" + process.env.PUBLIC_URL + "img/oil-rig.png", 
                    height:"150px", textAlign:"center", color:"white"}}>
                        <h1 style={{fontWeight:"bold", paddingTop:"25px"}}>Welcome back!</h1>
                        <p>Greetings, User. It's good to see you again</p>
                    </div>

                    <h1 style={{textAlign:"center", paddingTop:"50px", marginBottom:"0.5rem", fontSize:"2rem", color:"#6B6968"}}>Catch up on your learning</h1>
                    <hr style={{marginBottom: "15px"}}/>
                    
                    <CourseRow>
                        <CourseCard
                            title="Advanced drilling engineering in a very high level"
                            desc="Learn about the most advanced drilling engineering in this course."
                            difficulty="Expert"
                            domain="Drilling"
                            imgSrc="img/course-drilling-test.png"
                            avgRating={5}
                            ratingCount={1997}
                        />
                        <CourseCard
                            title="Advanced drilling engineering in a very high level"
                            desc="Learn about the most advanced drilling engineering in this course."
                            difficulty="Expert"
                            domain="Drilling"
                            imgSrc="img/course-drilling-test.png"
                            avgRating={5}
                            ratingCount={1997}
                        />
                        <CourseCard
                            title="Advanced drilling engineering in a very high level"
                            desc="Learn about the most advanced drilling engineering in this course."
                            difficulty="Expert"
                            domain="Drilling"
                            imgSrc="img/course-drilling-test.png"
                            avgRating={5}
                            ratingCount={1997}
                        />
                        <CourseCard
                            title="Advanced drilling engineering in a very high level"
                            desc="Learn about the most advanced drilling engineering in this course."
                            difficulty="Expert"
                            domain="Drilling"
                            imgSrc="img/course-drilling-test.png"
                            avgRating={5}
                            ratingCount={1997}
                        />
                        <CourseCard
                            title="Advanced drilling engineering in a very high level"
                            desc="Learn about the most advanced drilling engineering in this course."
                            difficulty="Expert"
                            domain="Drilling"
                            imgSrc="img/course-drilling-test.png"
                            avgRating={5}
                            ratingCount={1997}
                        />
                        <CourseCard
                            title="Advanced drilling engineering in a very high level"
                            desc="Learn about the most advanced drilling engineering in this course."
                            difficulty="Expert"
                            domain="Drilling"
                            imgSrc="img/course-drilling-test.png"
                            avgRating={5}
                            ratingCount={1997}
                        />
                    </CourseRow>

                    <h1 style={{textAlign:"center", paddingTop:"50px", fontSize:"2rem", color:"#6B6968"}}>Recommended for you</h1>
                    <h2 style={{fontSize:"1.3rem", marginTop:"2rem"}}>Because you applied for <a href="#">"Techlog wellbore - beginner tutorial"</a> </h2>
                    <hr style={{marginBottom: "15px"}}/>
                    
                    <CourseRow>
                        <CourseCard
                            title="Advanced drilling engineering in a very high level"
                            desc="Learn about the most advanced drilling engineering in this course."
                            difficulty="Expert"
                            domain="Drilling"
                            imgSrc="img/course-drilling-test.png"
                            avgRating={5}
                            ratingCount={1997}
                        />
                        <CourseCard
                            title="Advanced drilling engineering in a very high level"
                            desc="Learn about the most advanced drilling engineering in this course."
                            difficulty="Expert"
                            domain="Drilling"
                            imgSrc="img/course-drilling-test.png"
                            avgRating={5}
                            ratingCount={1997}
                        />
                        <CourseCard
                            title="Advanced drilling engineering in a very high level"
                            desc="Learn about the most advanced drilling engineering in this course."
                            difficulty="Expert"
                            domain="Drilling"
                            imgSrc="img/course-drilling-test.png"
                            avgRating={5}
                            ratingCount={1997}
                        />
                        <CourseCard
                            title="Advanced drilling engineering in a very high level"
                            desc="Learn about the most advanced drilling engineering in this course."
                            difficulty="Expert"
                            domain="Drilling"
                            imgSrc="img/course-drilling-test.png"
                            avgRating={5}
                            ratingCount={1997}
                        />
                        <CourseCard
                            title="Advanced drilling engineering in a very high level"
                            desc="Learn about the most advanced drilling engineering in this course."
                            difficulty="Expert"
                            domain="Drilling"
                            imgSrc="img/course-drilling-test.png"
                            avgRating={5}
                            ratingCount={1997}
                        />
                        <CourseCard
                            title="Advanced drilling engineering in a very high level"
                            desc="Learn about the most advanced drilling engineering in this course."
                            difficulty="Expert"
                            domain="Drilling"
                            imgSrc="img/course-drilling-test.png"
                            avgRating={5}
                            ratingCount={1997}
                        />
                    </CourseRow>

                    <h2 style={{fontSize:"1.3rem", marginTop:"2rem"}}>Courses related to <a href="#">Software</a> </h2>
                    <CategoryNavBar>
                        <CategoryItem itemActive={true}>POPULAR</CategoryItem>
                        <CategoryItem itemActive={false}>LATEST</CategoryItem>
                        <CategoryItem itemActive={false}>BEGINNER</CategoryItem>
                        <CategoryItem itemActive={false}>ADVANCED</CategoryItem>
                    </CategoryNavBar>

                    <CourseRow>
                        <CourseCard
                            title="Advanced drilling engineering in a very high level"
                            desc="Learn about the most advanced drilling engineering in this course."
                            difficulty="Expert"
                            domain="Drilling"
                            imgSrc="img/course-drilling-test.png"
                            avgRating={5}
                            ratingCount={1997}
                        />
                        <CourseCard
                            title="Advanced drilling engineering in a very high level"
                            desc="Learn about the most advanced drilling engineering in this course."
                            difficulty="Expert"
                            domain="Drilling"
                            imgSrc="img/course-drilling-test.png"
                            avgRating={5}
                            ratingCount={1997}
                        />
                        <CourseCard
                            title="Advanced drilling engineering in a very high level"
                            desc="Learn about the most advanced drilling engineering in this course."
                            difficulty="Expert"
                            domain="Drilling"
                            imgSrc="img/course-drilling-test.png"
                            avgRating={5}
                            ratingCount={1997}
                        />
                        <CourseCard
                            title="Advanced drilling engineering in a very high level"
                            desc="Learn about the most advanced drilling engineering in this course."
                            difficulty="Expert"
                            domain="Drilling"
                            imgSrc="img/course-drilling-test.png"
                            avgRating={5}
                            ratingCount={1997}
                        />
                        <CourseCard
                            title="Advanced drilling engineering in a very high level"
                            desc="Learn about the most advanced drilling engineering in this course."
                            difficulty="Expert"
                            domain="Drilling"
                            imgSrc="img/course-drilling-test.png"
                            avgRating={5}
                            ratingCount={1997}
                        />
                        <CourseCard
                            title="Advanced drilling engineering in a very high level"
                            desc="Learn about the most advanced drilling engineering in this course."
                            difficulty="Expert"
                            domain="Drilling"
                            imgSrc="img/course-drilling-test.png"
                            avgRating={5}
                            ratingCount={1997}
                        />
                    </CourseRow>
                </Container>
            </div>
        );
    }
}