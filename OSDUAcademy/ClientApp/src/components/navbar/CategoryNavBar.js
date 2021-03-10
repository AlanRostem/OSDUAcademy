import React, { Component } from 'react';
import './NavMenu.css';
import {Col, Row} from "reactstrap";

export class CategoryNavBar extends Component {
    static displayName = CategoryNavBar.name;
    

    render () {
        return (
            <ul className="nav nav-tabs justify-content-center">
                {this.props.children}
            </ul>
        );
    }
}