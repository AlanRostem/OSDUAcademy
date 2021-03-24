import React, {Component} from "react";
import LearningService from "../../../services/LearningService";

export default class Figure extends Component {

    state = {
        loaded: false
    }

    componentDidMount() {
        let courseRoute = LearningService.getCurrentCourseRoute();

        LearningService.fetchCourseImage(courseRoute, this.props.image, src => {
            this.setState({
                loaded: true,
                src: src
            })
        });
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