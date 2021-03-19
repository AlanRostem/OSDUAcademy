import React, {Component} from 'react';
import JsxParser from "react-jsx-parser"

export class CourseContent extends Component {
    static displayName = CourseContent.name;

    render() {
        return (
            <ul className="course-navigation">
                <li  className="previous-ch">
                    <div>
                        <a href="/">
                            <button className="nav-btn" onClick="">
                                <i className="fa fa-chevron-left" aria-hidden="true"/>
                            </button>
                        </a>
                    </div>
                </li>
                <li>
                    <JsxParser className="course-content" jsx={this.props.content}/>
                </li>
                <li className="next-ch">
                    <div>
                        <a href="/certificate-choice">
                            <button className="nav-btn">
                                <i className="fa fa-chevron-right" aria-hidden="true"/>
                            </button>
                        </a>
                    </div>
                </li>
            </ul>
        );
    }
}