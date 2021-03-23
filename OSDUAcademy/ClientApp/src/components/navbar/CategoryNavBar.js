import React, {Component} from 'react';
import './NavMenu.css';
import shortid from "shortid"

export class CategoryNavBar extends Component {
    static displayName = CategoryNavBar.name;
    navBarId = shortid()
    activeId = ""

    populateChildren() {
        return (
            <div>
                {this.props.children.map((child, i) => {
                    const id = this.navBarId + i;
                    let display = "none";
                    if (child.props.itemActive) {
                        display = "block";
                        this.activeId = id;
                    }
                    return <div key={i} style={{display: display}} id={id}>
                        {child.props.componentToShow}
                    </div>
                })}
            </div>
        )
    }

    handleTabClick(event) {
        const current = document.getElementById(this.activeId);
        current.style.display = "none";
        const next = document.getElementById(event.target.value);
        next.style.display = "block";
        this.activeId = event.target.value;
    }

    render() {
        return (
            <div>
                <ul className="nav nav-tabs justify-content-center" style={{marginBottom: "1em"}}>
                    {this.props.children.map((child, i) =>
                        <button className={"nav-item" + (this.props.itemActive ? " active" : "")}
                            key={i}
                            onClick={this.handleTabClick.bind(this)}
                            value={this.navBarId + i}
                        >
                            {child}
                        </button>
                    )}
                </ul>
                {this.populateChildren()}
            </div>
        );
    }
}