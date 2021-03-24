import React, {Component} from 'react';
import {Collapse, Container, Navbar, NavbarToggler, NavItem, NavLink} from 'reactstrap';
import {Link, Redirect} from 'react-router-dom';
import './NavMenu.css';
import NavIcon from "./NavIcon";
import UserNavLink from "./UserNavLink";
import UserService from "../../services/UserService";


/**
 * 
 */

export class CertificationNavMenu extends Component {
    static displayName = CertificationNavMenu.name;

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
                        <div>
                            <NavLink tag={Link} to="/" className="text-light home-button">
                                <NavIcon text="HOME" iconClass="fa fa-home"/>
                            </NavLink>
                        </div>

                        <NavbarToggler onClick={this.toggleNavbar} className="mr-2"/>
                        <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed}
                                  navbar>
                            <ul className="navbar-nav flex-grow">
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