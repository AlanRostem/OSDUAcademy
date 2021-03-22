import React, { Component } from 'react';
import './chapterDrop.css'

/**
 * The component returns a list-item containing "subchapter" property which defines the title of a subchapter. It is 
 * made to be used as the child of "ChapterDrop" component. 
 */

export class ChapterItem extends Component {
    static displayName = ChapterItem.name;

    render () {
        return (
            <li className="drop-item">{this.props.subchapter}</li>
        );
    }
}