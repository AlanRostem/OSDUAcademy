import React, {Component} from 'react';
import {CourseNavMenu} from "../components/navbar/CourseNavMenu";
import '../components/course-interface/courseInterface.css'
import JsxParser from "react-jsx-parser";
import {Redirect} from "react-router-dom";

export class CourseInterface extends Component {
    static displayName = CourseInterface.name;
    
    state = {
        loaded: false,
        content: "",
    }
    
    handleNextClick() {
        
    }
    
    componentDidMount() {
        
    }

    render() {
        return (
            <div className="interface-container">
                <CourseNavMenu/>
                <ul className="course-navigation">
                    <li  className="previous-ch">
                        <button className="nav-btn" onClick="">
                            <i className="fa fa-chevron-left" aria-hidden="true"/>
                        </button>
                    </li>
                    <li>
                        {
                            this.state.loaded ?
                                <JsxParser
                                    className="course-content" 
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