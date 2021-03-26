import React, {Component} from 'react';
import './NavMenu.css';
import shortid from "shortid";

/**
 * The component returns a horizontal navigation bar that on click shows courses in the same domain. The first section
 * shows all courses. It is used in "home.js" and "homeli.js" components. 
 */

export class CategoryNavBar extends Component {
    static displayName = CategoryNavBar.name;
    navBarId = shortid()
    activeId = ""

    /* Each child of this component should be a "CategoryItem" component. As they are populated, they are wrapped
    * into individual <div> elements */
    populateChildren() {
        return (
            <div>
                {React.Children.map(this.props.children, (child, i) => {
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
    
    /* On click changes the active button and shows the content related to it */

    handleTabClick(event) {
        const currentButton = document.getElementById("category-nav-button-" + this.activeId)
        currentButton.classList.remove("active");

        const currentElement = document.getElementById(this.activeId);
        currentElement.style.display = "none";

        const nextButton = event.target;
        nextButton.classList.add("active");

        const nextElement = document.getElementById(event.target.value);
        nextElement.style.display = "block";

        this.activeId = event.target.value;
    }

    render() {
        return (
            <div>
                <ul className="category-navmenu">
                    {React.Children.map(this.props.children, (child, i) =>
                        <button className={"nav-item" + (child.props.itemActive ? " active" : "")}
                                id={"category-nav-button-" + this.navBarId + i}
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