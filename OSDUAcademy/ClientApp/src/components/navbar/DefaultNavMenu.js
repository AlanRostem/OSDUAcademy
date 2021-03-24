import React, {Component} from 'react';
import {Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink} from 'reactstrap';
import {Link} from 'react-router-dom';
import './NavMenu.css';
import SchlumbergerLogo from "./SchlumbergerLogo"
import VerticalDivider from "./VerticalDivider";
import NavIcon from "./NavIcon";
import UserNavLink from "./UserNavLink";
import UserService from "../../services/UserService";

/**
 * The component returns a navigation menu that is located on the top of the page. It is used as the default menu on
 * all pages except for the course-related. It includes Schlumberger- and OSDU Academy logo, which serve as links to
 * the home page. On the far right side, two icons re-direct the user to another page.
 * The first one is for those who want to teach the OSDU, and the other one log-in/user profile depending on whether
 * a user is logged in. The two icons are placed in a collapse tag, meaning that if the page becomes smaller, those two
 * icons become one.
 */

export class DefaultNavMenu extends Component {
    static displayName = DefaultNavMenu.name;

    constructor(props) {
        super(props);

        /* Collapses icons into one */
        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            collapsed: true
        };
    }

    /* Re-renders the component depending on the state change */
    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }

    render() {
        return (
            <header>
                <Navbar
                    className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3 navbar-slb"
                    light>

                    <Container>
                        <NavbarBrand tag={Link} to={UserService.isLoggedIn() ? "/home-li" : "/"}><SchlumbergerLogo/></NavbarBrand>
                        <NavbarBrand><VerticalDivider/></NavbarBrand>
                        <NavbarBrand tag={Link} to={UserService.isLoggedIn() ? "/home-li" : "/"} style={{fontWeight: "bold", color: "white", fontSize: "1.5rem"}}>OSDU
                            Academy</NavbarBrand>

                        <NavbarToggler onClick={this.toggleNavbar} className="mr-2"/>
                        <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed}
                                  navbar>
                            <ul className="navbar-nav flex-grow">
                                <NavItem>
                                    <NavLink tag={Link} className="text-light" to="/teach">
                                        <NavIcon text="TEACH THE OSDU" iconClass="fa fa-book"/>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <UserNavLink />
                                </NavItem>
                            </ul>
                        </Collapse>
                    </Container>

                </Navbar>
            </header>
        );
    }
}
