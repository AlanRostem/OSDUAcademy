import React, { Component } from 'react';
import './chapterDrop.css'

/**
 * The component returns a drop-down menu with different chapters in the course and its functionality.
 * At the moment, it is used in the "CourseFrontPage" and "CourseNavMenu", but can be used for other drop-down menus in
 * the app as well. The component includes two properties: "name" (defines header of every menu section) and 
 * "amount" (the number of subchapters in each section). Both properties are a part of a button that the user can click.
 */

export class ChapterDrop extends Component {
    static displayName = ChapterDrop.name;

    constructor(props) {
        super(props);

        /** The drop bar is closed by default and no data except header and number of subchapters is shown **/
        this.state = {
            dropBar: false,

        }

    }

    /** Function which is called when drop-button is pressed **/
    dropBar() {

        /** Makes react re-render the component as the state (open/closed) changes **/
        this.setState({
            dropBar: !this.state.dropBar,
        });
    }

    render () {
        return (
            <div className="course-drop">
                <button 
                    className="drop-button slightly-dim" onClick={this.dropBar.bind(this)}>
                    <h3>
                        {this.props.name}
                        <i className="fa fa-caret-down"/>
                    </h3>
                    <p className="subchapterAmount">{this.props.amount} Lectures</p>
                </button>

                {
                    this.state.dropBar
                        ? (
                            <div className="drop-menu slightly-dim">
                                <ul className="drop-list">
                                    {this.props.children}
                                </ul>
                            </div>
                        )
                        : null
                }
            </div>
        );
    }
}