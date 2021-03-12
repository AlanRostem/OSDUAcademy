import React, {Component} from 'react';
import {Container} from "reactstrap";
import {CategoryNavBar} from "../components/navbar/CategoryNavBar";
import {CategoryItem} from "../components/navbar/CategoryItem";
import CourseCard from "../components/home/CourseCard";
import CourseRow from "../components/home/CourseRow";
import {LogNavMenu} from "../components/navbar/LogNavMenu";
import {Footer} from "../components/navbar/Footer";
import {SideNav} from "../components/navbar/SideNav";
import {SideDrop} from "../components/navbar/SideDrop";
import {SideItem} from "../components/navbar/SideItem";

export class Search extends Component {
    static displayName = Search.name;

    render() {
        return (
            <div>
                <LogNavMenu/>
                <Container>
                    <SideNav>
                        <SideDrop name="Domain">
                            <SideItem>Geophysics</SideItem>
                            <SideItem>Business</SideItem>
                            <SideItem>Analysis</SideItem>
                            <SideItem>Drilling</SideItem>
                            <SideItem>Software</SideItem>
                        </SideDrop>
                        
                        <SideDrop name="Rating">...</SideDrop>
                        
                        <SideDrop name="Duration">...</SideDrop>
                        
                        <SideDrop name="Difficulty">...</SideDrop>
                    </SideNav>
                </Container>
                <Footer/>
            </div>
        );
    }
}