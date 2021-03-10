import React, {Component} from "react"
import 'bootstrap/dist/css/bootstrap.min.css';

export default class SearchForm extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ""};
        
        this.inputFieldStyle = {};
        this.inputFieldStyle.minHeight = "2.2rem";
        this.inputFieldStyle.width = "300px";
    }
    
    handleChange(event) {
        this.setState({value: event.target.value});
    }
    
    handleSubmit(event) {
        console.log("You searched for", this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit.bind(this)}>
                <input 
                    type="text" 
                    className="fa fa-search" 
                    value={this.state.value}
                    placeholder="Search"
                    onChange={this.handleChange.bind(this)} 
                    style={this.inputFieldStyle} 
                />
            </form>
        );
    }
}