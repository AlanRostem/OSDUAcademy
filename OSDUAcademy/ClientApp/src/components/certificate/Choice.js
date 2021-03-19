import React, {Component} from 'react';

export class Choice extends Component {
    static displayName = Choice.name;

    render() {
        return (
            <div className="choice">
                <input type="radio" name={this.props.name} id={this.props.optionid}/>
                <label>{this.props.children}</label> 
            </div>
        );
    }
}