import React, {Component} from "react"
import CourseScrollBar from "./CourseScrollBar";
import shortid from "shortid";

export default class CourseRow extends Component {
    selfId = shortid.generate();
    rowId = shortid.generate();
    
    // currentScrollAmount = 0;
    
    constructor(props) {
        super(props);
        this.state = {mounted: false, containerWidth: undefined};
    }

    componentDidMount() {
        this.setState({
            mounted: true,
            containerWidth: document.getElementById(this.selfId).clientWidth,
        });
    }

    onScroll(direction) {
        // let row = document.getElementById(this.getRowId());
        // row.style.left = (this.currentScrollAmount -= direction * this.state.containerWidth) + "px";
    }
    
    render() {
        let scrollBar = this.state.mounted ?
            <CourseScrollBar
                onScroll={this.onScroll.bind(this)}
                courseCount={this.props.children.length}
                courseContainerWidth={this.state.containerWidth}/>
            : undefined;

        return (
            <div id={this.selfId}>
                <div id={this.rowId} className="course-row">
                    {this.props.children}
                </div>
                {scrollBar}
            </div>
        );
    }
}