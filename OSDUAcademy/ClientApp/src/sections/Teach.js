import React, {Component} from 'react';
import {Container} from "reactstrap";
import {DefaultNavMenu} from "../components/navbar/DefaultNavMenu";
import {Footer} from "../components/navbar/Footer";

/**
 * The component returns an informative page about how one can become a part of the OSDU Academy teaching community,
 * It includes details about how to make courses, contact information for help, and a link for downloading the course
 * template. 
 */

export class Teach extends Component {
    static displayName = Teach.name;

    render() {
        return (
            <div>
                <DefaultNavMenu/>
                <Container>
                    <div className="add-course-info">
                        <h1>How to make and add new courses to the OSDU Academy?</h1>
                        <p>
                            If you are interested in contributing to a better OSDU community and want to
                            make a course about the oil and gas sector, please follow the instructions further down on the
                            page.
                        </p>
                        <h3>Instructions</h3>
                        <p>
                            As the OSDU Academy webpage is in the early phases of development, the teaching interface is yet to
                            be implemented. To make the job easier for the instructors, we have made a template that you can use to
                            make a course. You can download the template at the bottom of the page.
                        </p>
                        <p>
                            To successfully make a course, you are obligated to download the custom template and send it to one of the OSDU Academy administrators. The course is going to be checked before approval and
                            eventually made available to students.
                        </p>
                        <h3>Contact and help</h3>
                        
                        <p>Email: post-osdu@osdu.com</p>
                        
                        <p>Phone: +99 99 99 99</p>
                        
                        <h3>Template</h3>
                        <a href="/">Download the course template here</a>
                    </div>
                </Container>
                <Footer/>
            </div>
        );
    }
}