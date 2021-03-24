import React, {Component} from 'react';

/**
 * The component returns a radio button containing an alternative answer for a question. The "name" attribute has to be the same for 
 * every answer alternative for a specific question, in contrast to "optionid" which has to be different for each choice. 
 * It must be used in "CertificationTest" component as a child of the "Question" component. 
 */

export class Choice extends Component {
    static displayName = Choice.name;

    render() {
        return (
            <div className="choice">
                <input type="radio" name={this.props.name} id={this.props.optionid} onClick={this.props.onClick}/>
                <label>{this.props.children}</label>
            </div>
        );
    }
}

