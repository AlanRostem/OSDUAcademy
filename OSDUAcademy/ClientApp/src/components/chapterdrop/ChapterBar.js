import React, { Component } from 'react';
import './chapterDrop.css'

/**
 * The component returns an element that is used in the "CourseFrontPage" component as the holder for a drop-down menu 
 * defined in "ChapterDrop" component. 
 */

export class ChapterBar extends Component {
    static displayName = ChapterBar.name;

    render () {
        return (
            <div className="chapter-bar">
                {this.props.children}
            </div>
        );
    }
}