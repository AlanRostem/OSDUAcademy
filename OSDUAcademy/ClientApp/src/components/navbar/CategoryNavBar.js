import React, {Component} from 'react';
import './NavMenu.css';

export class CategoryNavBar extends Component {
    static displayName = CategoryNavBar.name;

    populateChildren() {
        let children = [];
        let i = 0;
        for (let c of this.props.children) {
            children.push(
                <div key={i++} style={{display: c.props.itemActive ? "block" : "none"}}>
                    {c.props.componentToShow}
                </div>
            )
        }
        return (
            <div>
                {children}
            </div>
        );
    }

    render() {
        return (
            <div>
                <ul className="nav nav-tabs justify-content-center" style={{marginBottom: "1em"}}>
                    {this.props.children}
                </ul>
                {this.populateChildren()}
            </div>
        );
    }
}