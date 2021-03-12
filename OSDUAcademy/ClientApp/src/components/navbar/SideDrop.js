import React, { Component } from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';
import SchlumbergerLogo from "./SchlumbergerLogo"
import VerticalDivider from "./VerticalDivider";
import SearchForm from "./SearchForm";
import NavIcon from "./NavIcon";

export class SideDrop extends Component {
    static displayName = SideDrop.name;

    render () {
        return (
            <div className="sideNavDrop">
                <button className="drop-button">{this.props.name}<i className="fa fa-caret-down"/></button>
                <div>
                    {this.props.children}
                </div>
            </div>
        );
    }
}