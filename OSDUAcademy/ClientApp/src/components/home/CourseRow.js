import React, {Component} from "react"
import {CarouselProvider, Slider, Slide, ButtonBack, ButtonNext} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

export default class CourseRow extends Component {

    render() {
        return (
            <CarouselProvider
                naturalSlideWidth={100}
                naturalSlideHeight={120}
                visibleSlides={4}
                step={3}
                infinite={true}
                isIntrinsicHeight={true}
                totalSlides={this.props.children.length}>
                <Slider>
                    {
                        this.props.children.map((child, i) => {
                            return (
                                <Slide index={i}>
                                    {child}
                                </Slide>
                            );
                        })
                    }
                </Slider>
                <ButtonBack>Back</ButtonBack>
                <ButtonNext>Next</ButtonNext>
            </CarouselProvider>
        );
    }
}

/*    
<div id={this.rowId} className="course-row">
    {this.props.children}
</div>               
{scrollBar}
 */