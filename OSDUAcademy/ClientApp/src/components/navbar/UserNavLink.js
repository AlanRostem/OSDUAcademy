﻿import React, {Component} from "react";
import {NavItem, NavLink} from "reactstrap";
import {Link} from "react-router-dom";
import NavIcon from "./NavIcon";
import UserService from "../../services/UserService";

/**
 * The component returns a Sign up link which re-directs the user to the login page if the user is not logged in yet. 
 * If the case is opposite and the user is logged in, the text below the icon shows the user's name and is 
 */

export default class UserNavLink extends Component {
    render() {
        let route = "/login-page";
        let text = "SIGN UP";
        if (UserService.isLoggedIn()) {
            route = "users/" + UserService.getUser().id;
            text  = UserService.getUser().firstName;
        }

        return (
            <NavLink tag={Link} className="text-light" to={route}>
                <NavIcon text={text} iconClass="fa fa-user"/>
            </NavLink>
        );
    }
}