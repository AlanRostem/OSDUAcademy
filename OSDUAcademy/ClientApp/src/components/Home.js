import React, {Component} from 'react';
import {DefaultNavMenu} from "./navbar/DefaultNavMenu";
import {Container} from "reactstrap";

export class Home extends Component {
    static displayName = Home.name;

    render() {
        return (
            <div>
                <DefaultNavMenu/>
                <Container>
                    <div className="banner">
                        <h1>Grow your career skills</h1>
                        <p>Explore a world of courses at OSDU Academy to find your perfect suit free of charge</p>

                        <div className="row">
                            <div className="column">
                                <div className="card"> <i className="fa fa-code" aria-hidden="true"/> </div>
                            </div>
                            <div className="column">
                                <div className="card">..</div>
                            </div>
                            <div className="column">
                                <div className="card">..</div>
                            </div>
                        </div>
                        
                    </div>
                </Container>
            </div>
        );
    }
}
