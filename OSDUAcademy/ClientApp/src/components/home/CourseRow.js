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
                step={4}
                infinite={true}
                isIntrinsicHeight={true}
                dragEnabled={false}
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
                <div className="course-scroll-button-container">
                    <ButtonBack className="course-scroll-button"><i
                        className={`fa fa-chevron-left fa-sm`}/></ButtonBack>
                    <ButtonNext className="course-scroll-button"><i
                        className={`fa fa-chevron-right fa-sm`}/></ButtonNext>
                </div>
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