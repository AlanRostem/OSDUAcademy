import React, {Component} from "react"
import {CarouselProvider, Slider, Slide, ButtonBack, ButtonNext} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import CourseCard from "./CourseCard";
import CourseService from "../../services/CourseService";

export default class CourseRow extends Component {

    constructor(props) {
        super(props);
        this.state = {loading: true}
    }


    componentDidMount() {
        this.populateCourses();
    }

    async populateCourses() {
        if (this.props.testingEnabled) {
            this.setState({loading: false, data: []})
            return;
        }

        const callback = data => {
            this.setState({
                data: data,
                loading: false
            });
        };

        if (this.props.searchByTrending) {
            CourseService.fetchCoursesByTrending(callback)
        } else {
            if (!this.props.domainToSearchBy)
                this.setState({data: [], loading: false});
            else
                CourseService.fetchCoursesByDomain(this.props.domainToSearchBy, callback)
        }
    }

    render() {
        let len = 0;
        if (this.props.searchByTrending && this.state.data) {
            len = this.state.data.length;
        } else if (this.props.testingEnabled) {
            len = React.Children.count(this.props.children);
        }

        return (
            <CarouselProvider
                naturalSlideWidth={100}
                naturalSlideHeight={120}
                visibleSlides={4}
                step={4}
                infinite={true}
                isIntrinsicHeight={true}
                dragEnabled={false}
                totalSlides={len}>
                {(() => {
                    if (this.props.testingEnabled) {
                        return this.showTestSlider();
                    } else {
                        return this.state.loading ?
                            this.showLoading() :
                            this.showCourses()
                    }
                })()}
                <div className="course-scroll-button-container">
                    <ButtonBack className="course-scroll-button"><i
                        className={`fa fa-chevron-left fa-sm`}/></ButtonBack>
                    <ButtonNext className="course-scroll-button"><i
                        className={`fa fa-chevron-right fa-sm`}/></ButtonNext>
                </div>
            </CarouselProvider>
        );
    }

    showCourses() {
        return (
            <Slider>
                {
                    this.state.data.map((data, i) => 
                            <Slide index={i} key={i}>
                                <CourseCard
                                    title={data.title}
                                    desc={data.description}
                                    difficulty={data.difficulty}
                                    domain={data.domain}
                                    routeName={data.publicRoute}
                                />
                            </Slide>)
                }
            </Slider>
        );
    }
    
    showTestSlider() {
        return <Slider>
            {
                React.Children.map(this.props.children, (child, i) =>
                    <Slide index={i} key={"test" + i}>
                        {child}
                    </Slide>)
            }
        </Slider>
    }
    
    showLoading() {
        return (
            <p>
                Loading...
            </p>
        );
    }
}

/*    
<div id={this.rowId} className="course-row">
    {this.props.children}
</div>               
{scrollBar}
 */