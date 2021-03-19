import React, {Component} from 'react';
import JsxParser from "react-jsx-parser"
import {Redirect} from "react-router-dom";

export class CourseContent extends Component {
    static displayName = CourseContent.name;

    state = {takeTest: false}

    handleNextClick() {
        this.setState( {takeTest: true});
    }
    
    render() {
        return (
            <ul className="course-navigation">
                <li  className="previous-ch">
                    <button className="nav-btn" onClick="">
                        <i className="fa fa-chevron-left" aria-hidden="true"/>
                    </button>
                </li>
                <li>
                    <JsxParser className="course-content" jsx={this.props.content}/>
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
        );
    }
}