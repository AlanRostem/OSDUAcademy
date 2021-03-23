import React, { Component } from "react"

/**
 * 
 */

export class CatchUpCard extends Component {
    static displayName = CatchUpCard.name;
    
    render() {
        return (
            <div className="course-card">
                <div>
                    <img src={process.env.PUBLIC_URL + "/thumbnails/courses/" + this.props.routeName + ".png"} alt={"Course: " + this.props.title}/>
                    <h6>{this.props.title}</h6>
                    <div style={{textAlign:"center"}}><button className="catch-btn">CONTINUE</button></div>
                </div>
            </div>
        );
    }
}
