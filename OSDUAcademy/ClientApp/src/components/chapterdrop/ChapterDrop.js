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
            <div className="CourseDrop">
                <button 
                    className="drop-button" onClick={this.dropBar.bind(this)}>
                    <h3>{this.props.name}</h3>
                    <p className="subchapterAmount">{this.props.amount} Lectures</p>
                    <i className="fa fa-caret-down"/>
                </button>

                {
                    this.state.dropBar
                        ? (
                            <div>
                                {this.props.children}
                            </div>
                        )
                        : null
                }
            </div>
        );
    }
}