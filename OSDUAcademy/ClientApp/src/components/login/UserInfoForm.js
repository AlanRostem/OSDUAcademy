import React from "react";
import {Component} from "react";

/**
 * An open component for creating forms. At this moment, it is only used in "Login" component. 
 */

export default class UserInfoForm extends Component {
    render() {
        return (
            <form className="user-info-form" onSubmit={this.props.onSubmit}>
                {this.props.children}
            </form>
        );
    }
}