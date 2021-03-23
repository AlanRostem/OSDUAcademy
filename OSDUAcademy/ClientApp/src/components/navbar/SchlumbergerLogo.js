import React, { Component } from "react";

/**
 * The component returns an image of Schlumberger logo. Used in "DefaultNavMenu" component. 
 */

export default class SchumbergerLogo extends Component {
    render() {
        return (
            <img src={process.env.PUBLIC_URL + "img/slb-logo.png"} alt="Schlumberger logo" style={{maxHeight: "2rem"}} />
        );
    }
}