import React, {Component} from 'react';
import {Collapse, Navbar, NavItem, NavLink} from 'reactstrap';
import {Link} from 'react-router-dom';
import './NavMenu.css';
import NavIcon from "./NavIcon";
import {CourseSideBar} from "../course-interface/CourseSideBar";
import {ChapterDrop} from "../chapterdrop/ChapterDrop";
import {ChapterItem} from "../chapterdrop/ChapterItem";
import LearningService from "../../services/LearningService";

export class CourseNavMenu extends Component {
    static displayName = CourseNavMenu.name;

    constructor(props) {
        super(props);

        this.toggleNavbar = this.toggleNavbar.bind(this);
        
        this.state = {
            collapsed: true,
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
                                                {
                                                    LearningService.getSectionData().map((section, i) =>
                                                        <ChapterDrop key={i} name={section.title} amount={section.lectures.length}>
                                                            {section.lectures.map((lecture, j) =>
                                                                <ChapterItem key={j}>
                                                                    <button value={i + "." + j} onClick={this.props.onLectureSelection}>
                                                                        {lecture.title}
                                                                    </button>
                                                                </ChapterItem>
                                                            )}
                                                        </ChapterDrop>
                                                    )
                                                }
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
