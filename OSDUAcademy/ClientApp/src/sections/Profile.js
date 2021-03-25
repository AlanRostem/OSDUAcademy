import React, { Component } from 'react';
import {DefaultNavMenu} from "../components/navbar/DefaultNavMenu";
import {Footer} from "../components/navbar/Footer";
import {Container} from "reactstrap";

/**
 * The component returns
 */

export class Profile extends Component {
    static displayName = Profile.name;

    render () {
        return (
            <div>
                <DefaultNavMenu/>
                <Container className="profile-container">
                    <div className="profile-info">
                        <ul>
                            <li>
                                <span className="field">Name: </span>
                                <span className="input">Jens Olsen</span>
                            </li>
                            <li>
                                <span className="field">Email: </span>
                                <span className="input">jens.olsen@gmail.com</span>
                            </li>
                            <li>
                                <span className="field">Occupation: </span>
                                <span className="input">Team Manager</span>
                            </li>
                        </ul>
                    </div>
                </Container>
                <Footer/>
            </div>
        );
    }
}