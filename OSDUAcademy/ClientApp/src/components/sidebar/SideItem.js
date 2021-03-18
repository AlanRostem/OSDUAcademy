import React, { Component } from 'react';

export class SideItem extends Component {
    static displayName = SideItem.name;

    render () {
        return (
            <div className="side-item">
                <input type="checkbox" id="item" name="" value="item"/>
                <label htmlFor="item">{this.props.children}</label>
                <br/>
            </div>
        );
    }
}