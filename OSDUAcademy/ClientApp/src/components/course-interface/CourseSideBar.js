import React, {Component} from 'react';

export class CourseSideBar extends Component {
    static displayName = CourseSideBar.name;
    state = {closed: false}

    render() {
        return (
            <div className="course-sidebar">
                <div>
                    <div className="overview-h">
                        <h3 className="slightly-dim">Course content <button className="fa fa-times close-btn"
                                                                            aria-hidden="true"
                                                                            onClick={this.props.onClose}/>
                        </h3>
                    </div>
                    {
                        this.props.children
                    }
                </div>
            </div>
        );
    }
}