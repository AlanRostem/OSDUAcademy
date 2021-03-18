import React, { Component } from 'react';

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
