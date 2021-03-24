import React, { Component } from 'react';

/**
 * The component returns a placeholder for the side-menu which was set to be used at the search page. At this moment, 
 * it is not used anywhere. 
 */

export class SideNav extends Component {
    static displayName = SideNav.name;

    render () {
        return (
            <div className="side-bar">
                {this.props.children}
            </div>
        );
    }
}
