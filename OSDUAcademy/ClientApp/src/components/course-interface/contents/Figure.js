import React, {Component} from "react";

export default class Figure extends Component {
    render() {
        return (
            <div>
                <img src={this.props.image} alt={this.props.name || "image"}/>
                <p>{this.props.children}</p>
            </div>
        );
    }
}