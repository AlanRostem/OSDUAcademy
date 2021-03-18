import React, {Component} from "react"
import {CarouselProvider, Slider, Slide, ButtonBack, ButtonNext} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import CourseCard from "./CourseCard";

export default class CourseRow extends Component {
    courses = [];

    constructor(props) {
        super(props);
        this.state = {loading: true}
    }


    componentDidMount() {
        this.populateCourses();
    }

    async populateCourses() {
        let route = "";
        if (this.props.searchByTrending) {
            route = "trending";
        } else {
            route = this.props.domainToSearchBy;
            if (!route)
                this.setState({data: [], loading: false});
            else 
                route = "domain/" + this.props.domainToSearchBy;
            return;
        }

        const response = await fetch('course/' + route);
        try {
            const data = await response.json();
            this.setState({data: data, loading: false});
        } catch (e) {
            console.error(response);
        }
    }

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
                totalSlides={this.courses.length}>
                {
                    this.state.loading ?
                        this.showLoading() :
                        this.showCourses()

                }
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
        for (let data of this.state.data) {
            this.courses.push(
                <CourseCard
                    title={data.title}
                    desc={data.description}
                    difficulty={data.difficulty}
                    domain={data.domain}
                    routeName={data.publicRoute}
                    imgSrc={process.env.PUBLIC_URL + "img/" + data.imgUrl}
                />
            );
        }

        return <Slider>
            {
                this.courses.map((child, i) => {
                    return (
                        <Slide index={i} key={i}>
                            {child}
                        </Slide>
                    );
                })
            }
        </Slider>;
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