import React, { Component } from 'react';

/**
 * Not used at this moment. 
 * 
 * The component returns a side-menu element in form of a button. On click, the element shows its children. 
 */

export class SideDrop extends Component {
    static displayName = SideDrop.name;
    
    constructor(props) {
        super(props);
        
        /* The side-bar is not open by default */
        this.state = {
            dropBar: false,
            
        }
        
    }

    dropBar() {

        /* Changes state when clicked and re-renders the component */
        this.setState({
            dropBar: !this.state.dropBar,
        });
    }

    render () {
        return (
            <div className="sideNavDrop">
                <hr style={{width: "70%", marginLeft: "0"}}/>
                <button className="drop-button" onClick={this.dropBar.bind(this)}>{this.props.name}<i className="fa fa-caret-down"/></button>
                
                {
                    this.state.dropBar
                        ? (
                            <div>
                                {this.props.children}
                            </div>
                        ) 
                        : null
                }
            </div>
        );
    }
}