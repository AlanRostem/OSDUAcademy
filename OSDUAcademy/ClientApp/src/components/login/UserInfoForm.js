import React from "react";
import {Component} from "react";

export default class UserInfoForm extends Component {
    render() {
        return (
            <form className="user-info-form">
                {this.props.children}
            </form>
        );
    }
}