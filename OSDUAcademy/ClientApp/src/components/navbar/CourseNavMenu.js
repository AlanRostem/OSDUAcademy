import React, {Component} from 'react';
import {Collapse, Navbar, NavItem, NavLink} from 'reactstrap';
import {Link} from 'react-router-dom';
import './NavMenu.css';
import NavIcon from "./NavIcon";
import {CourseSideBar} from "../course-interface/CourseSideBar";
import {ChapterDrop} from "../chapterdrop/ChapterDrop";
import {ChapterItem} from "../chapterdrop/ChapterItem";
import LearningService from "../../services/LearningService";

/**
 * The component returns a navigation menu that is used at the top of all course interface pages. It includes two
 * buttons on opposite sides. The first one takes the user back to the home page. The second one is an
 * overview button that shows the course structure on click. The difference between those two buttons is that the
 * "overview" button is collapsable, meaning that the button disappears if the page gets smaller.
 *
 * The section elements in the "CourseSideBar" tag are populated from the database.
 */

export class CourseNavMenu extends Component {
    static displayName = CourseNavMenu.name;

    constructor(props) {
        super(props);

        this.toggleNavbar = this.toggleNavbar.bind(this);
        
        /* The side menu with course structure is not shown and sections in the menu are empty */
        this.state = {
            collapsed: true,
            showOverview: false,
        }
    }

    /* The component re-renders when the state (not collapsed/collapsed) is changed and updates it */
    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }
    
    showOverview() {
        
        /* The component re-renders when the state is changed. The default state is that the overview is not 
        * visible  */

        this.setState({
            showOverview: !this.state.showOverview,
        });
    }
    
    /* Specifies route to match the current course route and gets the overview data from the database. Updates
    * the section and re-renders the component. */
    componentDidMount() {
        const route = 'learn/' + LearningService.getCurrentCourseRoute() + "/overview";
        fetch(route)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    sections: data,
                });
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
                            <NavIcon text="HOME" iconClass="fa fa-home"/>
                        </NavLink>
                    </div>
                    <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed}
                              navbar>
                        <ul className="navbar-nav flex-grow">
                            <NavItem>
                                <NavLink className="text-light overview-button" onClick={this.showOverview.bind(this)}>
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
