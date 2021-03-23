import React, { Component } from 'react';

/**
 * The component is set to be used as the child of "SideDrop" component and returns a checkbox with label on the 
 * right side of it. At this moment, it is not used. 
 */

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