import React, {Component} from 'react';

export class CourseContent extends Component {
    static displayName = CourseContent.name;

    render() {
        return (
            <ul className="course-navigation">
                <li  className="previous-ch">
                    <div>
                        <button className="nav-btn">
                            <i className="fa fa-chevron-left" aria-hidden="true"/>
                        </button>
                    </div>
                </li>
                <li>
                    <div  className="course-content">
                        {this.props.content}
                    </div>
                </li>
                <li className="next-ch">
                    <div>
                        <button className="nav-btn">
                            <i className="fa fa-chevron-right" aria-hidden="true"/>
                        </button>
                    </div>
                </li>
            </ul>
        );
    }
}