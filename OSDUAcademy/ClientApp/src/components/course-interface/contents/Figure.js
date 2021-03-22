import React, {Component} from "react";
import LearningService from "../../../services/LearningService";

export default class Figure extends Component {

    state = {
        loaded: false
    }

    componentDidMount() {
        let courseRoute = LearningService.getCurrentCourseRoute();

        fetch(`learn/content/${courseRoute}/images/${this.props.image}`)
            .then(response => response.blob())
            .then(blob => {
                this.setState({
                    loaded: true,
                    src: URL.createObjectURL(blob)
                })
            })
    }

    render() {
        return (
            <div>
                <img src={this.state.src} alt={this.props.name || "image"}/>
                <p>{this.props.children}</p>
            </div>
        );
    }
}