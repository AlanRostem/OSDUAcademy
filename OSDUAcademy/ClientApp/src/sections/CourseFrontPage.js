import React, {Component} from "react";
import {DefaultNavMenu} from "../components/navbar/DefaultNavMenu";
import {Container, DropdownItem} from "reactstrap";
import CourseBanner from "../components/course-front-page/CourseBanner";
import "../components/course-front-page/course-front-page.css"
import {Footer} from "../components/navbar/Footer";
import {ChapterBar} from "../components/chapterdrop/ChapterBar";
import {ChapterDrop} from "../components/chapterdrop/ChapterDrop";
import {ChapterItem} from "../components/chapterdrop/ChapterItem";


export default class CourseFrontPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true
        };
    }

    showCourseContent() {
        return (
            <div>
                <div className="course-intro-card">
                    <img src={process.env.PUBLIC_URL + "img/course-drilling-test.png"} alt="Course"/>
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
                            <button>Apply</button>
                            <button>Share</button>
                        </div>
                    </div>
                </div>
                <CourseBanner
                    title="Intermediate course for developers"
                    desc="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede."
                    difficulty="Intermediate"
                    domain="Business"
                    duration="3-4 days"
                    creator="Nemanja Babic"
                    lastUpdated="02-02-2020"
                />

                <Container>
                    <ChapterBar>
                        <ChapterDrop name="Introduction" amount="2">
                            <ChapterItem> What </ChapterItem>
                        </ChapterDrop>
                    </ChapterBar>
                    <div className="course-description-container">
                        <h2>Course Description</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat
                            mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper
                            suscipit, posuere a, pede.

                            Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci.
                            Aenean dignissim pellentesque felis.

                            Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a,
                            ultricies in, diam. Sed arcu. Cras consequat.

                            Praesent dapibus, neque id cursus faucibus, tortor neque egestas auguae, eu vulputate magna
                            eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor,
                            facilisis luctus, metus.

                            Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate
                            sem tristique cursus. Nam nulla quam, gravida non, commodo a, sodales sit amet, nisi.
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
        const response = await fetch('course');
        const data = await response.json();
        this.setState({data: data, loading: false});
    }
}