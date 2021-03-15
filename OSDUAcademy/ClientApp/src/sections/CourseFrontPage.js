import React, {Component} from "react";
import {DefaultNavMenu} from "../components/navbar/DefaultNavMenu";
import {Container} from "reactstrap";
import CourseBanner from "../components/course-front-page/CourseBanner";
import "../components/course-front-page/course-front-page.css"
import {Footer} from "../components/navbar/Footer";

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
                    title={this.state.data[0].title}
                    desc={this.state.data[0].description}
                    avgRating={this.state.data[0].avgRating}
                    ratingCount={2015}
                    appliedCount={5002}
                    difficulty="Intermediate"
                    domain="Business"
                    duration="8h 41min"
                    creator="Nemanja Babic"
                    lastUpdated="02-02-2020"
                />
                <Container>

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