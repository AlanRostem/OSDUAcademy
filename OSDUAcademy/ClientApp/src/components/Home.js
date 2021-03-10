import React, {Component} from 'react';
import {DefaultNavMenu} from "./navbar/DefaultNavMenu";
import {Col, Container, Row} from "reactstrap";

export class Home extends Component {
    static displayName = Home.name;

    render() {
        return (
            <div>
                <DefaultNavMenu/>
                <Container>
                    <div className="banner" style={{backgroundImage: "url(" + process.env.PUBLIC_URL + "img/oil-rig.png"}}>
                        <h1>Grow your career skills</h1>
                        <p>Explore a world of courses at OSDU Academy to find your perfect suit free of charge</p>

                        <div className="row">
                            <div className="column">
                                <div className="card"><i className="fa fa-desktop fa-3x" aria-hidden="true"/> 
                                <h6>Open Source</h6>
                                <p>Lorem ipsum something I don't know what to put here but it is important</p>
                                </div>
                            </div>
                            <div className="column">
                                <div className="card"> <i className="fa fa-database fa-3x" aria-hidden="true"/>
                                    <h6>Specialized learning</h6>
                                    <p>Lorem ipsum something I don't know what to put here but it is important</p>
                                </div>
                            </div>
                            <div className="column">
                                <div className="card"> <i className="fa fa-graduation-cap fa-3x" aria-hidden="true"/>
                                    <h6>Teaching freedom</h6>
                                    <p>Lorem ipsum something I don't know what to put here but it is important</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <h1 style={{textAlign:"center"}}>Trending Courses</h1>
                    <p style={{textAlign:"center", color:"#7f7f7f"}}>Explore the most popular courses at OSDU Academy</p>
                    <Row style={{textAlign:"center"}}>
                        <Col>PETROLEUM</Col>
                        <Col>GEOLOGY</Col>
                        <Col>ENERGY</Col>
                        <Col>GAS</Col>
                        <Col>OTHER</Col>
                    </Row>
                    <Row style={{textAlign:"center"}}>
                    </Row>
                </Container>
            </div>
        );
    }
}
