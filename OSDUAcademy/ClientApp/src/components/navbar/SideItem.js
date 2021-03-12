import React, { Component } from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';
import SchlumbergerLogo from "./SchlumbergerLogo"
import VerticalDivider from "./VerticalDivider";
import SearchForm from "./SearchForm";
import NavIcon from "./NavIcon";

export class SideItem extends Component {
    static displayName = SideItem.name;

    render () {
        return (
            <div className="side-item" style={{color:"white"}}>
                <input type="checkbox" id="item" name="" value="item"/>
                <label htmlFor="item">{this.props.children}</label>
                <br/>
            </div>
        );
    }
}