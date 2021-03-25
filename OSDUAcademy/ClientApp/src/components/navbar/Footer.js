import React, { Component } from 'react';
import './NavMenu.css';

/**
 * The component returns the footer element which is used in all components except for the "CourseInterface" one. It 
 * consists of a horizontal unordered list with four hyperlinks (Home, About, Services and Contract) which provide 
 * the user with additional information about the product and its functionalities. 
 */

export class Footer extends Component {
    static displayName = Footer.name;

    render () {
        return (
            <footer>
                <ul className="footer-row">
                    <li className="footer-col"><a href="/">Home</a></li>
                    <li className="footer-col"><a href="/">About</a></li>
                    <li className="footer-col"><a href="/federated">Services</a></li>
                    <li className="footer-col"><a href="/profile-page">Contact</a></li>
                </ul>
                <hr style={{backgroundColor:"white", width:"50%"}}/>
                <p className="footer-lic">OSDU Academy © 2021 | By Schlumberger </p>
                
            </footer>
        );
    }
}