import React, {Component} from "react"

export default class StarRating extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: props.value,
            count: props.count,
        }
    }

    makeStars() {
        let stars = [];
        let rating = Math.floor(this.state.value);
        for (let i = 0; i < 5; i++) {
            let style = {};
            if (rating > 0) {
                rating--;
                style.color = "orange";
            }
            else {
                style.color = "gray";
            }
            stars.push(<i key={i} className="fa fa-star" style={style}/>);
        }
        
        return stars;
    }

    render() {

        return (
            <div style={{marginBottom: "0.2em"}}>
                <span>{this.makeStars()}</span><span>  {this.props.value}  </span><span className="dim-text">({this.state.count})</span>
            </div>
        );
    }
}