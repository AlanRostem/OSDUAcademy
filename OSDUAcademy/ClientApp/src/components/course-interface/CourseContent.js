import React, {Component} from 'react';
import JsxParser from "react-jsx-parser"
import {Redirect} from "react-router-dom";

/**
 * The component returns a horizontal unordered list with three list elements, the first and third being chevrons to 
 * the previous and next chapter respectively. The second list item is the course section content, wrapped in a 
 * <JsxParser/> tag which takes jsx code and parses it as a string (outputs React component). 
 * 
 * https://open.spotify.com/track/4S1VYqwfkLit9mKVY3MXoo?si=014e5f85355f45d7
 */

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