import React, {Component} from "react"
import {CarouselProvider, Slider, Slide, ButtonBack, ButtonNext} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import CourseCard from "./CourseCard";
import CourseService from "../../services/CourseService";
import UserService from "../../services/UserService";
import {CatchUpCard} from "./CatchUpCard";
import {CompletedCourseCard} from "./CompletedCourseCard";

/**
 * The component returns a carousel containing different course cards. It allows user to navigate horizontally between
 * courses. It is used at the home page (both when a user is logged in and not) and at the profile page. 
 */

export default class CourseRow extends Component {

    /* Loads course(s) if there is any available */
    constructor(props) {
        super(props);
        this.state = {loading: true}
    }

    /* Add courses to the carousel */
    componentDidMount() {
        this.populateCourses();
    }

    async populateCourses() {
        if (this.props.testingEnabled) {
            this.setState({loading: false, data: []})
            return;
        }

        if (UserService.isLoggedIn()) {
            if (this.props.fetchEnrolledUserCourses) {
                UserService.fetchEnrolledCourses(data => {
                        this.setState({
                            data: data,
                            loading: false,
                            showEnrolledCourses: true
                        });
                    },
                    () => {
                        this.setState({
                            loading: false,
                            showEnrolledCourses: false
                        });
                    });
                return;
            } else if (this.props.fetchCompletedCourses) {
                UserService.fetchCompletedUserCourses(data => {
                        this.setState({
                            data: data,
                            loading: false,
                            showCompletedCourses: true
                        });
                    },
                    () => {
                        this.setState({
                            loading: false,
                            showCompletedCourses: false
                        });
                    });
            }
        }

        /* Callback method for when the data is successfully retrieved */
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
        if (this.state.data) {
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
                        } else if (this.state.showEnrolledCourses) {
                            return <Slider> {this.state.data.map((course, i) =>
                                <Slide index={i} key={i}>
                                    <CatchUpCard title={course.title} routeName={course.publicRoute}/>
                                </Slide>)}
                            </Slider>;
                        } else if (this.state.showCompletedCourses) {
                            return <Slider> {this.state.data.map((course, i) =>
                                <Slide index={i} key={i}>
                                    <CompletedCourseCard title={course.title} routeName={course.publicRoute}/>
                                </Slide>)}
                            </Slider>;
                        } else if (this.props.searchByTrending || this.props.domainToSearchBy) {
                            return this.state.loading ?
                                this.showLoading() :
                                this.showCourses()
                        }
                    }

                )()
                }
                <div className="course-scroll-button-container">
                    <ButtonBack className="course-scroll-button"><i
                        className={`fa fa-chevron-left fa-sm`}/></ButtonBack>
                    <ButtonNext className="course-scroll-button"><i
                        className={`fa fa-chevron-right fa-sm`}/></ButtonNext>
                </div>
            </CarouselProvider>
        )
            ;
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