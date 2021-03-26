import React, {Component} from "react";
import LearningService from "../../../services/LearningService";

/**
 * The component returns an image with a description. It is set to be used by the OSDU Academy teaching
 * community when making a course and its content and is shown as a child of the "Content" component. The only thing
 * the course maker needs to provide is an image which should be saved in the "images" folder of the course template 
 * document. 
 */

export default class Figure extends Component {

    /* Picture is not shown */
    state = {
        loaded: false
    }

    componentDidMount() {
        let courseRoute = LearningService.getCurrentCourseRoute();
        
        /* Fetches image from the LearningService and shows it at the corresponding course */
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