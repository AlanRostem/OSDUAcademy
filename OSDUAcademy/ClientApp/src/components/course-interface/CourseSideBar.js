import React, {Component} from 'react';
import {CertificateButton} from "../chapterdrop/CertificateButton";
import {Link} from "react-router-dom";
import LearningService from "../../services/LearningService";

/**
 * The component returns a content division element and is embodied by a header following with course content in a form
 * of a drop down menu. It is also equipped with a button which closes the drop-down menu when clicked. It is used in 
 * the "CourseNavMenu" component as the parent component of the "ChapterDrop" component. 
 */

export class CourseSideBar extends Component {
    static displayName = CourseSideBar.name;
    
    /* The drop-down menu is open by default */
    state = {closed: false}

    render() {
        return (
            <div className="course-sidebar">
                <div className="overview">
                    <div className="overview-h">
                        <h3 className="slightly-dim">Overview<button className="fa fa-times close-btn"
                                                                            aria-hidden="true"
                                                                            onClick={this.props.onClose}/>
                        </h3>
                    </div>
                    {
                        this.props.children
                    }
                    <Link to={"/choose-to-certify/" + LearningService.getCurrentCourseRoute()}>
                        <CertificateButton />
                    </Link>
                </div>
            </div>
        );
    }
}