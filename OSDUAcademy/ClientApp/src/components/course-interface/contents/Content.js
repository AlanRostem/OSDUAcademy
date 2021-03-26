import React, {Component} from "react";

/**
 * The component returns a holder for the various content elements, such as embedded youtube videos, images and textual 
 * content. It is used in the "Course Interface" component. 
 */

export default class Content extends Component {
    render() {
        return this.props.children;
    }
}