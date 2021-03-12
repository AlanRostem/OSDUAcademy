import React, {Component} from 'react';
import {DefaultNavMenu} from "../components/navbar/DefaultNavMenu";
import {Col, Container, Row} from "reactstrap";
import {CategoryNavBar} from "../components/navbar/CategoryNavBar";
import {CategoryItem} from "../components/navbar/CategoryItem";
import CourseCard from "../components/home/CourseCard";
import CourseRow from "../components/home/CourseRow";
import CourseScrollButton from "../components/home/CourseScrollButton";
import CourseScrollBar from "../components/home/CourseScrollBar";


export class Homeli extends Component {
    static displayName = Homeli.name;

    render() {
        return (
            <div>
                <DefaultNavMenu/>
                <Container>
                    <div className="banner-li" style={{backgroundImage: "url(" + process.env.PUBLIC_URL + "img/oil-rig.png"}}>
                        <h1>Welcome back!</h1>
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
                    <CourseScrollBar />

                    <h1 style={{textAlign:"center", paddingTop:"50px", marginBottom:"0.5rem", fontSize:"2rem", color:"#6B6968"}}>Recommended for you</h1>
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
                    <CourseScrollBar />
                </Container>
            </div>
        );
    }
}