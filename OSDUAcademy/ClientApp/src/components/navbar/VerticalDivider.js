import React, {Component} from "react"

/**
 * The component returns a vertical line which is used in the "DefaultNavMenu" component as a divider between 
 * Schlumberger and OSDU Academy logo. 
 */

export default class VerticalDivider extends Component {
    constructor(props) {
        super(props);
        this.customStyle = {};
        this.customStyle.borderLeft = "2px solid white";
        this.customStyle.minHeight = "40px";
    }

    render() {
        return (
            <div style={this.customStyle}>
            </div>
        );
    }
}