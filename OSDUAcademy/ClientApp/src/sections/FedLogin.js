import React, { Component } from 'react';
import {DefaultNavMenu} from "../components/navbar/DefaultNavMenu";
import {Footer} from "../components/navbar/Footer";
import {Container} from "reactstrap";
import {Link} from "react-router-dom";

/**
 * The component returns 
 */

export class FedLogin extends Component {
    static displayName = FedLogin.name;

    render () {
        return (
            <div>
                <DefaultNavMenu/>
                <Container className="fed-login">
                    <div className="fed-form">
                        <h3>Choose a way to sign in</h3>
                        <ul className="log-list">
                            <li className="fed-li">
                                <Link to="#" className="sign-in-btn google-btn">
                                    <img className="fed-img" src={process.env.PUBLIC_URL + "img/google.png"} alt="google"/>
                                    <span>Sign in with Google</span>
                                </Link>
                            </li>
                            <li className="fed-li">
                                <Link to="#" className="sign-in-btn google-btn">
                                    <img className="fed-img" src={process.env.PUBLIC_URL + "img/google.png"} alt="google"/>
                                    <span>Sign in with Google</span>
                                </Link>
                            </li>
                            <li className="fed-li">
                                <Link to="#" className="sign-in-btn google-btn">
                                    <img className="fed-img" src={process.env.PUBLIC_URL + "img/google.png"} alt="google"/>
                                    <span>Sign in with Google</span>
                                </Link>
                            </li>
                        </ul>
                        
                    </div>
                </Container>
                <Footer/> 
            </div>
        );
    }
}