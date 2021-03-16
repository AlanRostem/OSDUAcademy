import React, {Component} from 'react';

export class CourseSideBar extends Component {
    static displayName = CourseSideBar.name;

    render() {
        return (
            <div className="course-sidebar">
                <h3 className="slightly-dim overview-h">Course content</h3>
                {this.props.children}
            </div>
        );
    }
}