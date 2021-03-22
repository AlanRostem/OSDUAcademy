import React, {Component} from "react";
import LearningService from "../../../services/LearningService";

export default class Figure extends Component {
    
    componentDidMount() {
        let courseRoute = LearningService.getCurrentCourseRoute();

        fetch(`learn/content/${courseRoute}/images/${this.props.image}`)
            .then(response => response.blob())
            .then()
    }

    render() {
        return (
            <div>
                <img src={this.props.image} alt={this.props.name || "image"}/>
                <p>{this.props.children}</p>
            </div>
        );
    }
}