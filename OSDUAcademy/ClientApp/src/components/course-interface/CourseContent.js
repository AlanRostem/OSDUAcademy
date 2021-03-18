import React, {Component} from 'react';

export class CourseContent extends Component {
    static displayName = CourseContent.name;

    render() {
        return (
            <div className="course-container">
                <ul className="course-navigation">
                    <li>
                        <div className="previous-ch">
                            LEFT
                        </div>
                    </li>
                    <li>
                        <div  className="course-content">
                            {this.props.content}
                        </div>
                    </li>
                    <li>
                        <div className="next-ch">
                            RIGHT
                        </div>
                    </li>
                </ul>
                
            </div>
        );
    }
}