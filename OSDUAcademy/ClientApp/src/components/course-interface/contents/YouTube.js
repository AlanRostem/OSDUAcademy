import React, {Component} from "react";

/**
 * The component returns a frame for a embedded youtube video. It is set to be used by the OSDU Academy teaching 
 * community when making a course and its content and is shown as a child of the "Content" component. 
 * The <iframe> tag allows the users to full-screen the video and navigate through it, amongst other things. 
 */

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