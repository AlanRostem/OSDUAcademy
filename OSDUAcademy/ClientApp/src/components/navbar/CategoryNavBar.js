import React, { Component } from 'react';
import './NavMenu.css';

export class CategoryNavBar extends Component {
    static displayName = CategoryNavBar.name;
    

    render () {
        return (
            <ul className="nav nav-tabs justify-content-center" style={{marginBottom: "1em"}}>
                {this.props.children}
            </ul>
        );
    }
}