import React, {Component} from "react";
import {NavLink} from "reactstrap";
import {Link, Redirect} from "react-router-dom";
import NavIcon from "./NavIcon";
import UserService from "../../services/UserService";

/**
 * The component returns a Sign up link which re-directs the user to the login page if the user is not logged in yet.
 * If the case is opposite and the user is logged in, the text below the icon shows the user's name and by clicking on
 * it - nothing happens at this moment.
 */

export default class UserNavLink extends Component {
    state = {
        hovered: false,
        clicked: false
    };
    
    render() {
        let route = "/login-page";
        let text = "SIGN IN";
        if (UserService.isLoggedIn()) {
            route = "/profile";
            text = UserService.getUser().firstName;
        }

        return (
            <NavLink tag={Link} to={route}
                     className="text-light">
                <NavIcon text={text} iconClass="fa fa-user"/>
            </NavLink>
        );
    }
}