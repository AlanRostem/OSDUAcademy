import React, {Component} from "react";
import {DefaultNavMenu} from "../components/navbar/DefaultNavMenu";
import {Container} from "reactstrap";
import CourseBanner from "../components/course-front-page/CourseBanner";
import "../components/course-front-page/course-front-page.css"
import {Footer} from "../components/navbar/Footer";
import {ChapterBar} from "../components/chapterdrop/ChapterBar";
import {ChapterDrop} from "../components/chapterdrop/ChapterDrop";
import {ChapterItem} from "../components/chapterdrop/ChapterItem";
import {Link} from "react-router-dom";

export default class CourseFrontPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
        };
    }

    showCourseContent() {
        return (
            <div>
                <div className="course-intro-card">
                    <img src={process.env.PUBLIC_URL + "/img/" + this.state.course.imgUrl} alt="Course"/>
                    <div className="intro-card-info">
                        <h3>Before you learn</h3>
                        <div className="slightly-dim">
                            <p>You should know the following prerequisites pefore enrolling:</p>
                            <div className="intro-prerequisite-lists">
                                <ul>
                                    <li>Prerequisite</li>
                                    <li>Prerequisite</li>
                                    <li>Prerequisite</li>
                                    <li>Prerequisite</li>
                                </ul>
                                <ul>
                                    <li>Prerequisite</li>
                                    <li>Prerequisite</li>
                                    <li>Prerequisite</li>
                                    <li>Prerequisite</li>
                                </ul>
                            </div>
                        </div>
                        <div className="intro-buttons">
                            <button><Link to="/">Apply</Link></button>
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
                                        <ChapterItem key={j} subchapter={lecture.title} />
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

    async getCourseData() {
        const response = await fetch('course/' + this.props.match.params.courseRoute);
        try {
            const data = await response.json();
            console.log(data);
            this.setState({
                course: data.course,
                sections: data.sections,
                loading: false
            });
        } catch (e) {
            console.error(e)
        }
  
    }
}