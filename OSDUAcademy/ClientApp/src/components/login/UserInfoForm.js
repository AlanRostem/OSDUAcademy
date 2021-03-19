import React from "react";
import {Component} from "react";

export default class UserInfoForm extends Component {
    render() {
        return (
            <form className="user-info-form" onSubmit={this.props.onSubmit}>
                {this.props.children}
            </form>
        );
    }
}