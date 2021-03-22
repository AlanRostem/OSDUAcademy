import React, { Component } from 'react';
import './NavMenu.css';

/**
 * 
 */

export class CategoryItem extends Component {
    static displayName = CategoryItem.name;

    render () {
        return (
            <p className="nav-link">{this.props.children}</p>
        );
    }
}

