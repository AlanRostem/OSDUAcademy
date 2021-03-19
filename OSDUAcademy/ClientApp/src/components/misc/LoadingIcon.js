import React from "react";
import {Component} from "react";

export default class LoadingIcon extends Component {
    render() {
        return (
            <div className="loading-icon dim-text">
                <i className="fa fa-spinner fa-3x" aria-hidden="true" />
            </div>
        );
    }
}