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
import {Redirect} from "react-router-dom";
import {CertificateButton} from "../components/chapterdrop/CertificateButton";
import CourseService from "../services/CourseService";

/**
 * 
 */

export default class CourseFrontPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            isEnrolled: false,
            redirectToLearn: false,
            coursePath: "/"
        };
    }

    handleApply() {
        if (UserService.isLoggedIn()) {
            UserService.applyToCourse(this.props.match.params.courseRoute, success => {
                this.setState({
                    isEnrolled: success === "true"
                });
            });
        }
        else {
            // TODO: Redirect to login if the user is not logged in
        }
    }

    handleStartCourse() {
        let path = `/learn/${this.props.match.params.courseRoute}/`;
        this.setState({
            redirectToLearn: true,
            coursePath: path,
        });
    }

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
                            <button disabled={this.state.isEnrolled} onClick={this.handleApply.bind(this)}>Apply
                            </button>
                            {
                                this.state.isEnrolled ?
                                    <button onClick={this.handleStartCourse.bind(this)}>Enter Course</button> : null
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
        if (this.state.redirectToLearn) {
            return <Redirect to={this.state.coursePath}/>;
        }
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

    getCourseData() {
        let course;
        let sections = [];
        CourseService.fetchFrontPageCourseData(this.props.match.params.courseRoute, data => {
            course = data.course;
            sections = data.sections;
            if (UserService.isLoggedIn()) {
                UserService.checkEnrollment(this.props.match.params.courseRoute,isEnrolled => {
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