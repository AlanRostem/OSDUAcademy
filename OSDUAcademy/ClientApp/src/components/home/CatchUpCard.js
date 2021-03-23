import React, { Component } from "react"

/**
 * 
 */

export class CatchUpCard extends Component {
    static displayName = CatchUpCard.name;
    
    render() {
        return (
            <div className="catchup-card">
                <div>
                    <img src={process.env.PUBLIC_URL + "img/test.png"} alt={"Course: " + this.props.title}/>
                    <h6>{this.props.title}</h6>
                    <p><button className="catch-btn">CONTINUE</button></p>
                </div>
            </div>
        );
    }
}
