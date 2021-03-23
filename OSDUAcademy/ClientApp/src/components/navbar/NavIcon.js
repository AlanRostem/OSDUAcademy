import React, {Component} from "react"

/**
 * The component returns a layout for icons set up to be used in the navigation menus. It includes the icon figure and 
 * the text below it. 
 */

export default class NavIcon extends Component {
    render() {
        return (
            <div className="text-center" >
                <i className={this.props.iconClass + " fa-lg"}/>
                <br/>
                <span>{this.props.text}</span>
            </div>
        )
    }
}