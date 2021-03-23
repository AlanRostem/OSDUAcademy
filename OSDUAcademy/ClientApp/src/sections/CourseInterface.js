import React, {Component} from 'react';
import {CourseNavMenu} from "../components/navbar/CourseNavMenu";
import '../components/course-interface/courseInterface.css'
import JsxParser from "react-jsx-parser";
import {Redirect} from "react-router-dom";

import Figure from "../components/course-interface/contents/Figure"
import Paragraph from "../components/course-interface/contents/Paragraph"
import Title from "../components/course-interface/contents/Title"
import YouTube from "../components/course-interface/contents/YouTube"
import LearningService from "../services/LearningService";
import Content from "../components/course-interface/contents/Content";

export class CourseInterface extends Component {
    static displayName = CourseInterface.name;

    state = {
        loaded: false,
        content: "",
        redirectCertification: false
    }

    handleNextClick() {
        let section = Number(LearningService.getSectionNo());
        let lecture = Number(LearningService.getLectureNo());
        const data = LearningService.getSectionData();
        if ((lecture + 1) === data[section].lectures.length) {
            lecture = 0;
            if ((section + 1) === data.length) {
                this.setState({
                    redirectCertification: true
                })
                return;
            } else {
                section++;
            }
        } else {
            lecture++;
        }

        const self = this;
        LearningService.loadLecture(LearningService.getCurrentCourseRoute(), section, lecture, xml => {
            self.setState({
                loaded: true,
                content: xml,
            });
        });
    }

    handlePreviousClick() {
        let section = Number(LearningService.getSectionNo());
        let lecture = Number(LearningService.getLectureNo());
        const data = LearningService.getSectionData();
        
        lecture--;
        if (lecture === -1) {
            if (section === 0)
                return;
            
            section--;
            lecture = data[section].lectures.length - 1;
        }

        const self = this;
        LearningService.loadLecture(LearningService.getCurrentCourseRoute(), section, lecture, xml => {
            self.setState({
                loaded: true,
                content: xml,
            });
        });
    }

    handleLectureSelect(event) {
        const str = event.target.value.split(".");
        const section = str[0];
        const lecture = str[1];
        // Not using strict equality since LearningService might use numbers instead of strings 
        if (section == LearningService.getSectionNo() && lecture == LearningService.getLectureNo())
            return;
        const self = this;
        LearningService.loadLecture(LearningService.getCurrentCourseRoute(), section, lecture, xml => {
            self.setState({
                loaded: true,
                content: xml,
            });
        });
    }

    componentDidMount() {
        const courseRoute = this.props.match.params.courseRoute;
        const self = this;
        LearningService.startCourse(courseRoute, xml => {
            self.setState({
                loaded: true,
                content: xml,
            });
        });
    }

    render() {
        if (this.state.redirectCertification) {
            const route = "/choose-to-certify/" + this.props.match.params.courseRoute;
            return <Redirect to={route}/>
        }
        
        return (
            <div className="interface-container">
                {
                    this.state.loaded ? <CourseNavMenu onLectureSelection={this.handleLectureSelect.bind(this)}/> : null
                }
                <ul className="course-navigation">
                    <li className="previous-ch">
                        <button className="nav-btn" onClick={this.handlePreviousClick.bind(this)}>
                            <i className="fa fa-chevron-left" aria-hidden="true"/>
                        </button>
                    </li>
                    <li>
                        {
                            this.state.loaded ?
                                <JsxParser
                                    className="course-content"
                                    components={{Content, Figure, Paragraph, Title, YouTube}}
                                    jsx={this.state.content}
                                /> :
                                <div className="course-content">Loading...</div>
                        }
                    </li>
                    <li className="next-ch">
                        <button className="nav-btn" onClick={this.handleNextClick.bind(this)}>
                            <i className="fa fa-chevron-right" aria-hidden="true"/>
                        </button>
                    </li>
                    {
                        this.state.takeTest ?
                            <Redirect to="/certificate-choice"/> : null
                    }
                </ul>
            </div>
        );
    }
}