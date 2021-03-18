import React, {Component} from 'react';
import './NavMenu.css';

export class CategoryNavBar extends Component {
    static displayName = CategoryNavBar.name;

    populateChildren() {
        return (
            <div>
                {this.props.children.map((c, i) =>
                    <div key={i++} style={{display: c.props.itemActive ? "block" : "none"}}>
                        {c.props.componentToShow}
                    </div>)}
            </div>
        )
    }

    handleTabClick() {
        console.log("Button: " + 0)
    }

    render() {
        return (
            <div>
                <ul className="nav nav-tabs justify-content-center" style={{marginBottom: "1em"}}>
                    {this.props.children.map((c, i) =>
                        <li className={ "nav-item" + (this.props.itemActive ? " active" : "") } onClick={this.handleTabClick.bind(this)} key={i}>
                            {c}
                        </li>
                    )}
                </ul>
                {this.populateChildren()}
            </div>
        );
    }
}