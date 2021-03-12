import React, {Component} from "react"
import {Row} from "reactstrap";
import CourseScrollBar from "./CourseScrollBar";

export default class CourseRow extends Component {
    static uuid = 0;
    uuid = CourseRow.uuid++;

    constructor(props) {
        super(props);
        this.state = {mounted: false, containerWidth: undefined};
    }

    componentDidMount() {
        this.setState({
            mounted: true,
            containerWidth: document.getElementById(this.getId()).clientWidth,
        });
    }

    getId() {
        return "course-row-container-self-" + this.uuid;
    }

    render() {
        let scrollBar = this.state.mounted ?
            <CourseScrollBar
                courseCount={this.props.children.length}
                courseContainerWidth={this.state.containerWidth}/>
            : undefined;

        return (
            <div id={this.getId()}>
                <Row className="course-row">
                    {this.props.children}
                </Row>
                {scrollBar}
            </div>
        );
    }
}