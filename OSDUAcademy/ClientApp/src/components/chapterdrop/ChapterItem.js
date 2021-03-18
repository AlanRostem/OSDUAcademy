import React, { Component } from 'react';
import './chapterDrop.css'

export class ChapterItem extends Component {
    static displayName = ChapterItem.name;

    render () {
        return (
            <li className="drop-item">{this.props.subchapter}</li>
        );
    }
}