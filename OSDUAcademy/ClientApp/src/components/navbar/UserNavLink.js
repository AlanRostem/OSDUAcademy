import React, {Component} from "react";
import {NavItem, NavLink} from "reactstrap";
import {Link} from "react-router-dom";
import NavIcon from "./NavIcon";
import UserService from "../../services/UserService";

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