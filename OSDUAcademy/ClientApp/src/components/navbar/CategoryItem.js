import React, { Component } from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';

export class CategoryItem extends Component {
    static displayName = CategoryItem.name;

    render () {
        return (
            <li className={ "nav-item" + (this.props.itemActive ? " active" : "") }>
                <p className="nav-link">{this.props.text}</p>
            </li>
        );
    }
}

