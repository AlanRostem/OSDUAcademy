import React, {Component} from "react"
import {Redirect} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';

/**
 * Not used at the moment. 
 * 
 * The component returns a search field which was set to be used at the top navigation menu. On the submit action, 
 * the user would be re-directed to the search page and the results. 
 */

export default class SearchForm extends Component {
    constructor(props) {
        super(props);
        this.state = {value: "", redirectNow: false};
        
        /* The search field is empty by default */
        this.inputFieldStyle = {};
        this.inputFieldStyle.minHeight = "2.2rem";
        this.inputFieldStyle.width = "400px";
        this.inputFieldStyle.marginLeft = "1.5rem";
    }

    /* re-renders the component when the input is not empty */
    handleChange(event) {
        this.setState({value: event.target.value});
    }

    /* on submit, the search field becomes empty again and the user gets re-directed to another page */
    handleSubmit(event) {
        event.preventDefault();
        if (this.state.value.length === 0) return;
        this.setState({value: this.state.value, redirectNow: true});
    }

    render() {
        return (
            <div>
                <form className="input-group" style={this.inputFieldStyle} onSubmit={this.handleSubmit.bind(this)}>
                    <input
                        className="form-control"
                        onChange={this.handleChange.bind(this)}
                        value={this.state.value}
                        type="text"
                        placeholder="Search"
                    />
                    <div className="input-group-append">
                        <button className="btn btn-secondary" type="submit">
                            <i className="fa fa-search"/>
                        </button>
                    </div>
                </form>
                {this.state.redirectNow ?
                <Redirect to={{
                    pathname: '/search',
                    search: this.state.value
                }}/> : undefined}
            </div>
        );
    }
}

/*
    <span className="fa fa-search" />
                <input
                    onChange={this.handleChange.bind(this)}
                    style={this.inputFieldStyle}
                    value={this.state.value}
                    type="text"
                    placeholder="Search"
                    className="form-control"
                />

*/