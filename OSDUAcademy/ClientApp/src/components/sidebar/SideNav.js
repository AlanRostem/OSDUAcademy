import React, { Component } from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';

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
