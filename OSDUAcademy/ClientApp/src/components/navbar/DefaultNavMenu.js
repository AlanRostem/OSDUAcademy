import React, { Component } from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';
import SchlumbergerLogo from "./SchlumbergerLogo"
import VerticalDivider from "./VerticalDivider";
import SearchForm from "./SearchForm";
import NavIcon from "./NavIcon";

export class DefaultNavMenu extends Component {
  static displayName = DefaultNavMenu.name;

  constructor (props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar () {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render () {
    return (
      <header>
        <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3 navbar-slb" light>
          <Container>
            <NavbarBrand tag={Link} to="/"><SchlumbergerLogo /></NavbarBrand>
            <NavbarBrand><VerticalDivider /></NavbarBrand>
            <NavbarBrand tag={Link} to="/" style={{fontWeight: "bold", color:"white", fontSize:"1.5rem"}}>OSDU Academy</NavbarBrand>
            
            <SearchForm />
            
            <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
            <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed} navbar>
              <ul className="navbar-nav flex-grow">
                <NavItem>
                  <NavLink tag={Link} className="text-light" to="/counter">
                    <NavIcon text="TEACH THE OSDU" iconClass="fa fa-book"/>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} className="text-light" to="/fetch-data">
                    <NavIcon text="SIGN UP" iconClass="fa fa-user"/>
                  </NavLink>
                </NavItem>
              </ul>
            </Collapse>
          </Container>
        </Navbar>
      </header>
    );
  }
}