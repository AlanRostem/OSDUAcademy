import React, {Component} from "react"

export default class NavIcon extends Component {
    render() {
        return (
            <div className="text-center" >
                <i className={this.props.iconClass + " fa-2x"}/>
                <br/>
                <span>{this.props.text}</span>
            </div>
        )
    }
}