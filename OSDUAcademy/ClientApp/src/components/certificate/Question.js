import React, {Component} from 'react';

/**
 * The component returns a question field that has to be used in the "CertificationTest" component. It includes "questioncount" and "inquiry"
 * properties as two headers. The former defines the number of the question and the latter one what the question is. Below those two,
 * there is an unordered list with the question alternatives defined in the "Choice" component as separate list entries.
 */

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