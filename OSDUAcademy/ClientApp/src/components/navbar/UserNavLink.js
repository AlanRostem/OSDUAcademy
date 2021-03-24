import React, {Component} from "react";
import {NavItem, NavLink} from "reactstrap";
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
    
    handleMouseEnter(event) {
        this.setState({
            hovered: true
        });
    }

    handleMouseLeave(event) {
        this.setState({
            hovered: false
        });
    }

    handleClicked(event) {
        this.setState({
            clicked: true
        });
    }
    
    render() {
        let route = "/login-page";
        let text = "SIGN IN";
        if (UserService.isLoggedIn()) {
            route = "/";
            if (this.state.hovered) {
                text = "SIGN OUT";
            } else {
                text = UserService.getUser().firstName;
            }
        }

        if (this.state.clicked) {
            if (UserService.isLoggedIn()) {
                UserService.logOut();
                text = "SIGN IN";
            }
            return <Redirect to={route}/>
        }
        
        return (
            <NavLink tag={Link}
                     className="text-light"
                     onMouseEnter={this.handleMouseEnter.bind(this)}
                     onMouseLeave={this.handleMouseLeave.bind(this)}
                     onClick={this.handleClicked.bind(this)}>
                <NavIcon text={text} iconClass="fa fa-user"/>
            </NavLink>
        );
    }
}