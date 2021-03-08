import React, {Component} from 'react';
import {Container} from 'reactstrap';
import {DefaultNavMenu} from './DefaultNavMenu';
import {Route} from "react-router-dom";
import {CourseNavMenu} from "./CourseNavMenu";

export class DefaultLayout extends Component {
    static displayName = DefaultLayout.name;

    render() {
        return (
            <div>
                <DefaultNavMenu />
                {this.props.children}
            </div>
        );
    }
}
