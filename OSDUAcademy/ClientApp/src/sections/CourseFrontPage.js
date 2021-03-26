import React, {Component} from "react";
import {DefaultNavMenu} from "../components/navbar/DefaultNavMenu";
import {Container} from "reactstrap";
import CourseBanner from "../components/course-front-page/CourseBanner";
import "../components/course-front-page/course-front-page.css"
import {Footer} from "../components/navbar/Footer";
import {ChapterBar} from "../components/chapterdrop/ChapterBar";
import {ChapterDrop} from "../components/chapterdrop/ChapterDrop";
import {ChapterItem} from "../components/chapterdrop/ChapterItem";
import UserService from "../services/UserService";
import {Link, Redirect} from "react-router-dom";
import {CertificateButton} from "../components/chapterdrop/CertificateButton";
import CourseService from "../services/CourseService";

/**
 * The component returns the front page of the course. It includes information about a specific course such as 
 * full course description and an overview of course lectures. It also provides a user a way to apply to a course.
 */

export default class CourseFrontPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            isEnrolled: false,
            redirectToLearn: false,
            redirectToLogin: false,
            coursePath: "/"
        };
    }

    /* If the user is logged in and clicks on the "apply" button, the state of "isEnrolled" changes to true. Else 
    * it re-directs user to the login page. */
    handleApply() {
        if (UserService.isLoggedIn()) {
            UserService.applyToCourse(this.props.match.params.courseRoute, success => {
                this.setState({
                    isEnrolled: success === "true"
                });
            });
        } else {
            this.setState({
                redirectToLogin: true,
            });
        }
    }
    
    /* Gets the course information */
    showCourseContent() {
        return (
            <div>
                <div className="course-intro-card">
                    <img
                        src={process.env.PUBLIC_URL + "/thumbnails/courses/" + this.props.match.params.courseRoute + ".png"}
                        alt="Course"/>
                    <div className="intro-card-info">
                        <h3>Before you learn</h3>
                        <div className="slightly-dim">
                            <p>You should know the following prerequisites before enrolling:</p>
                            {
                                this.populatePrerequisites()
                            }
                        </div>
                        <div className="intro-buttons">
                            <button disabled={this.state.isEnrolled} onClick={this.handleApply.bind(this)}>
                                {
                                    this.state.isEnrolled ? "Applied" : "Apply"
                                }
                            </button>
                            {
                                this.state.isEnrolled ?
                                    <Link to={`/learn/${this.props.match.params.courseRoute}/`}>Enter Course</Link> : null
                            }
                        </div>
                    </div>
                </div>
                <CourseBanner
                    title={this.state.course.title}
                    desc={this.state.course.description}
                    difficulty={this.state.course.difficulty}
                    duration={this.state.course.duration}
                />

                <Container>
                    <ChapterBar>
                        {
                            this.state.sections.map((section, i) =>
                                <ChapterDrop key={i} name={section.title} amount={section.lectures.length}>
                                    {section.lectures.map((lecture, j) =>
                                        <ChapterItem key={j}>
                                            {lecture.title}
                                        </ChapterItem>
                                    )}
                                </ChapterDrop>
                            )
                        }
                        <CertificateButton />
                    </ChapterBar>
                    <div className="course-description-container">
                        <h2>Course Description</h2>
                        <p>
                            {this.state.course.fullDescription}
                        </p>
                    </div>

                </Container>
            </div>
        )
    }

    render() {
        if (this.state.redirectToLogin)
            return <Redirect push to={"/login-page/" + this.props.match.params.courseRoute}/>

        return (
            <div>
                <DefaultNavMenu/>
                {
                    this.state.loading ?
                        <Container>Loading</Container>
                        : this.showCourseContent()
                }
                <Footer/>
            </div>
        );
    }

    componentDidMount() {
        this.getCourseData();
    }

    /* Fetches the course data and add an addtional button (Enter course) if the user has applied and is logged in */
    getCourseData() {
        let course;
        let sections = [];
        CourseService.fetchFrontPageCourseData(this.props.match.params.courseRoute, data => {
            course = data.course;
            sections = data.sections;
            if (UserService.isLoggedIn()) {
                UserService.checkEnrollment(this.props.match.params.courseRoute, isEnrolled => {
                    this.setState({
                        course: course,
                        sections: sections,
                        loading: false,
                        isEnrolled: isEnrolled === "true"
                    });
                })
            } else {
                this.setState({
                    course: course,
                    sections: sections,
                    loading: false,
                });
            }
        });
    }

    /* fills up the list of prerequisites for a specific course and returns it */
    populatePrerequisites() {
        let list0 = [];
        let list1 = [];

        let i = 0;
        for (let p of this.state.course.prerequisites) {
            if (i < 4) {
                list0.push(
                    <li key={i}>{p}</li>
                );
            } else {
                list1.push(
                    <li key={i}>{p}</li>
                );
            }
            i++;
        }

        return (
            <div className="intro-prerequisite-lists">
                <ul>
                    {list0}
                </ul>
                <ul>
                    {list1}
                </ul>
            </div>
        )
    }
}