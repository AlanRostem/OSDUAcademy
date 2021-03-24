import React, {Component} from "react";

export default class YouTube extends Component {
    render() {
        return (
            <iframe style={{width: "100%", height: "500px"}}
                    src={this.props.link} frameBorder="0"
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen/>
        );
    }
}