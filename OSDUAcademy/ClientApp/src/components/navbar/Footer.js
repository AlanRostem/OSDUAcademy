import React, { Component } from 'react';
import './NavMenu.css';

export class Footer extends Component {
    static displayName = Footer.name;

    render () {
        return (
            <footer>
                
                <ul className="footer-row">
                    <li className="footer-col"><a href="/">Home</a></li>
                    <li className="footer-col"><a href="/">About</a></li>
                    <li className="footer-col"><a href="/course-interface">Services</a></li>
                    <li className="footer-col"><a href="/">Contact</a></li>
                </ul>
                <hr style={{backgroundColor:"white", width:"50%"}}/>
                <p className="footer-lic">OSDU Academy © 2021 | By Schlumberger </p>
                
            </footer>
        );
    }
}