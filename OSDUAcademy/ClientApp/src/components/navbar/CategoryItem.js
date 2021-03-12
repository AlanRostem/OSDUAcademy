import React, { Component } from 'react';
import './NavMenu.css';

export class CategoryItem extends Component {
    static displayName = CategoryItem.name;

    render () {
        return (
            <li className={ "nav-item" + (this.props.itemActive ? " active" : "") }>
                <p className="nav-link">{this.props.children}</p>
            </li>
        );
    }
}

