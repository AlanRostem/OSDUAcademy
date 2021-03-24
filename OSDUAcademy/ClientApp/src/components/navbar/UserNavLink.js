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
        logOut: false
    }

    handleSignOut(event) {
        UserService.logOut();
        this.setState({
            logOut: true
        })
    }
    
    handleMouseEnter(event) {
        this.setState({
            hovered: UserService.isLoggedIn()
        });
    }

    handleMouseLeave(event) {
        this.setState({
            hovered: false
        });
    }

    render() {
        if (this.state.logOut)
            return <Redirect to={"/"} />
        
        let route = "/login-page";
        let text = "SIGN UP";
        if (UserService.isLoggedIn()) {
            route = "#"; // "users/" + UserService.getUser().id;
            text = UserService.getUser().firstName;
        }

        return (
            <NavLink tag={Link}
                     className="text-light"
                     to={route}
                     onMouseEnter={this.handleMouseEnter.bind(this)}>
                <NavIcon text={text} iconClass="fa fa-user"/>
                {
                    this.state.hovered ?
                        <div onMouseLeave={this.handleMouseLeave.bind(this)} className="logout-menu">
                            <div className="logout-container">
                                <button onClick={this.handleSignOut.bind(this)}>SIGN OUT</button>
                            </div>
                        </div>
                        : null
                }
            </NavLink>
        );
    }
}