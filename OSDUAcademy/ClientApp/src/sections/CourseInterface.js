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

export class CourseInterface extends Component {
    static displayName = CourseInterface.name;
    
    state = {
        loaded: false,
        content: "",
    }
    
    handleNextClick() {
        
    }
    
    componentDidMount() {
        let courseRoute = this.props.match.params.courseRoute;
        let section = this.props.match.params.section;
        let lecture = this.props.match.params.lecture;
        
        LearningService.loadLecture(courseRoute, section, lecture, xml => {
            this.setState({
                loaded: true,
                content: xml,
            });
        });
    }

    render() {
        return (
            <div className="interface-container">
                <CourseNavMenu/>
                <ul className="course-navigation">
                    <li  className="previous-ch">
                        <button className="nav-btn">
                            <i className="fa fa-chevron-left" aria-hidden="true"/>
                        </button>
                    </li>
                    <li>
                        {
                            this.state.loaded ?
                                <JsxParser
                                    className="course-content"
                                    components={{Figure, Paragraph, Title, YouTube}}
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