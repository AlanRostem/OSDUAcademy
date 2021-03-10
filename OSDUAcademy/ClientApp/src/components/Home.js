import React, {Component} from 'react';
import {DefaultNavMenu} from "./navbar/DefaultNavMenu";
import {Container} from "reactstrap";
import SearchForm from "./navbar/SearchForm";

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
                                <div className="card"><i className="fa fa-desktop fa-3x" aria-hidden="true"/> Lorem ipsum something I don't know what to put here but it is important
                                </div>
                            </div>
                            <div className="column">
                                <div className="card"> <i className="fa fa-database fa-3x" aria-hidden="true"/> Lorem ipsum something I don't know what to put here but it is important
                                </div>
                            </div>
                            <div className="column">
                                <div className="card"> <i className="fa fa-graduation-cap fa-3x" aria-hidden="true"/> Lorem ipsum something I don't know what to put here but it is important
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </Container>
            </div>
        );
    }
}
