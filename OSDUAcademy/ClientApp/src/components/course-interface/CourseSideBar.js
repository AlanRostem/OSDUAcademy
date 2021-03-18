import React, {Component} from 'react';

export class CourseSideBar extends Component {
    static displayName = CourseSideBar.name;
    state = {closed: false}

    close() {
        this.setState({closed: true})
    }

    render() {
        return (
            <div className="course-sidebar">
                {
                    !this.state.closed ?
                        <div>
                            <div className="overview-h">
                                <h3 className="slightly-dim">Course content <button className="fa fa-times close-btn"
                                                                                    aria-hidden="true"
                                                                                    onClick={this.close.bind(this)}/>
                                </h3>
                            </div>
                            {
                                this.props.children
                            }
                        </div>
                        : undefined
                }
            </div>
        );
    }
}