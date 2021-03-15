import React, { Component } from 'react';
import './chapterDrop.css'

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