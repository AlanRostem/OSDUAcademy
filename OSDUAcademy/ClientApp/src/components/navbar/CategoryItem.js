import React, { Component } from 'react';
import './NavMenu.css';

/**
 * It returns a child elements of the "CategoryNavBar" component. 
 */

export class CategoryItem extends Component {
    static displayName = CategoryItem.name;

    render () {
        return (
            this.props.children
        );
    }
}

