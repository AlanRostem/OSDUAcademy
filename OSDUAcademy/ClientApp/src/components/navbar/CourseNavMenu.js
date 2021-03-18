import React, {Component} from 'react';
import {Collapse, Navbar, NavItem, NavLink} from 'reactstrap';
import {Link} from 'react-router-dom';
import './NavMenu.css';
import NavIcon from "./NavIcon";
import {CourseSideBar} from "../course-interface/CourseSideBar";
import {ChapterDrop} from "../chapterdrop/ChapterDrop";
import {ChapterItem} from "../chapterdrop/ChapterItem";

export class CourseNavMenu extends Component {
    static displayName = CourseNavMenu.name;

    constructor(props) {
        super(props);

        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            collapsed: true
        };
        
        this.state = {
            showOverview: false,
        }
    }

    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }

    showOverview(event) {
        event.preventDefault();

        this.setState({
            showOverview: !this.state.showOverview,
        });
    }

    render() {
        return (
            <header>
                <Navbar
                    className="navbar-expand-sm navbar-toggleable-sm ng-white box-shadow navbar-slb navbar-width"
                    light>
                    
                    <div>
                        <NavLink tag={Link} to="/" className="text-light home-button">
                            <NavIcon text="COURSE" iconClass="fa fa-book"/>
                        </NavLink>
                    </div>
                    <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed}
                              navbar>
                        <ul className="navbar-nav flex-grow">
                            <NavItem>
                                <NavLink tag={Link} to="/course-front-page/:courseRoute" className="text-light overview-button" onClick={this.showOverview.bind(this)}>
                                    <NavIcon text="OVERVIEW" iconClass="fa fa-bars"/>
                                </NavLink>
                                {
                                    this.state.showOverview
                                        ? (
                                            <CourseSideBar onClose={this.showOverview.bind(this)}>
                                                <ChapterDrop name="Introduction" amount="1">
                                                    <ChapterItem subchapter="What you will learn"/>
                                                </ChapterDrop>
                                                <ChapterDrop name="Data Management" amount="5">
                                                    <ChapterItem subchapter="Somebody once told me"/>
                                                    <ChapterItem subchapter="The worlds gonna roll me"/>
                                                    <ChapterItem subchapter="I ain't the sharpest tool in the shed"/>
                                                    <ChapterItem subchapter="She was looking kind of dumb with her finger and her thumb She was looking kind of dumb with her finger and her thumb She was looking kind of dumb with her finger and her thumb She was looking kind of dumb with her finger and her thumb"/>
                                                    <ChapterItem subchapter="In the shape of an L on her forehead"/>
                                                </ChapterDrop>
                                                <ChapterDrop name="Another thing" amount="4">
                                                    <ChapterItem subchapter="Small things"/>
                                                    <ChapterItem subchapter="Bigger things"/>
                                                    <ChapterItem subchapter="Even bigger stuff"/>
                                                    <ChapterItem subchapter="The absolute biggest"/>
                                                </ChapterDrop>
                                                <ChapterDrop name="The last thing" amount="1">
                                                    <ChapterItem subchapter="Summary"/>
                                                </ChapterDrop>
                                            </CourseSideBar>
                                        )
                                        : null
                                }
                            </NavItem>
                        </ul>
                    </Collapse>
                    

                </Navbar>
            </header>
        );
    }
}
