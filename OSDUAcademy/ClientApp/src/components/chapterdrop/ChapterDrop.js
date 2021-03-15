import React, { Component } from 'react';
import './chapterDrop.css'

export class ChapterDrop extends Component {
    static displayName = ChapterDrop.name;

    constructor(props) {
        super(props);

        this.state = {
            dropBar: false,

        }

    }

    dropBar(event) {
        event.preventDefault();

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