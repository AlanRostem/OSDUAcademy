import React, {Component} from 'react';
import {Container} from "reactstrap";
import {CategoryNavBar} from "../components/navbar/CategoryNavBar";
import {CategoryItem} from "../components/navbar/CategoryItem";
import CourseCard from "../components/home/CourseCard";
import CourseRow from "../components/home/CourseRow";
import {LogNavMenu} from "../components/navbar/LogNavMenu";
import {Footer} from "../components/navbar/Footer";

export class Search extends Component {
    static displayName = Search.name;

    render() {
        return (
            <div>
                <LogNavMenu/>
                <Container>
                    
                </Container>
                <Footer/>
            </div>
        );
    }
}