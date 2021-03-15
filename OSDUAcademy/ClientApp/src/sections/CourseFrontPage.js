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
                </Container>
            </div>
        )
    }

    render() {
        return (
            <div>
                <DefaultNavMenu />
                {
                    this.state.loading ?
                        <Container>Loading</Container>
                    : this.showCourseContent()
                }
                <Footer />
            </div>
        );
    }
    
    componentDidMount() {
        this.getCourseData();
    }

    async getCourseData() {
        const response = await fetch('course');
        const data = await response.json();
        this.setState({ data: data, loading: false });
    }
}