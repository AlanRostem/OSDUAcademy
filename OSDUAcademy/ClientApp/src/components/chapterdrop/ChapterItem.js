import React, { Component } from 'react';
import './chapterDrop.css'

export class ChapterItem extends Component {
    static displayName = ChapterItem.name;

    render () {
        return (
            <div className="drop-menu slightly-dim">
                <ul className="drop-list">
                    <li className="drop-item">{this.props.subchapter}</li>
                </ul>
            </div>
        );
    }
}