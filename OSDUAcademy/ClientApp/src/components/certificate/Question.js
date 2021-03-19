import React, {Component} from 'react';

export class Question extends Component {
    static displayName = Question.name;

    render() {
        return (
            <div className="q-field">
                <h1>Question {this.props.questioncount}</h1>
                <h2>{this.props.inquiry}</h2>
                <ul>
                    <li>
                        {this.props.children}
                    </li>
                </ul>
            </div>
        );
    }
}