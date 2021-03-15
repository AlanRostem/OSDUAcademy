import React, { Component } from 'react';
import './chapterDrop.css'

export class ChapterItem extends Component {
    static displayName = ChapterItem.name;

    render () {
        return (
            <div className="drop-item">
                {this.props.children}
            </div>
        );
    }
}