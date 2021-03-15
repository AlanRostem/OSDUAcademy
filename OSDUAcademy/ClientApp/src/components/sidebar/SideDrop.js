import React, { Component } from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';

export class SideDrop extends Component {
    static displayName = SideDrop.name;
    
    constructor(props) {
        super(props);
        
        this.state = {
            dropBar: false,
            
        }
        
    }

    dropBar(event) {
        event.preventDefault();

        this.setState({
            dropBar: !this.state.dropBar,
        });
    }

    render () {
        return (
            <div className="sideNavDrop">
                <button className="drop-button" onClick={this.dropBar.bind(this)}>{this.props.name}<i className="fa fa-caret-down"/></button>
                
                {
                    this.state.dropBar
                        ? (
                            <div>
                                {this.props.children}
                            </div>
                        ) 
                        : null
                }
                
            </div>
        );
    }
}