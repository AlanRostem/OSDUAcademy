import React, { Component } from "react";

export default class SchumbergerLogo extends Component {
    render() {
        return (
            <img src={process.env.PUBLIC_URL + "img/slb-logo.png"} alt="Schlumberger logo" style={{maxHeight: "2rem"}} />
        );
    }
}