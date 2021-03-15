import React, {Component} from 'react';
import {Container} from "reactstrap";
import {CategoryNavBar} from "../components/navbar/CategoryNavBar";
import {CategoryItem} from "../components/navbar/CategoryItem";
import CourseCard from "../components/home/CourseCard";
import CourseRow from "../components/home/CourseRow";
import {LogNavMenu} from "../components/navbar/LogNavMenu";
import {Footer} from "../components/navbar/Footer";
import {SideNav} from "../components/sidebar/SideNav";
import {SideDrop} from "../components/sidebar/SideDrop";
import {SideItem} from "../components/sidebar/SideItem";
import '../components/sidebar/sideBar.css'

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
                        
                        <SideDrop name="Rating">
                            <SideItem>2+ Stars</SideItem>
                            <SideItem>3+ Stars</SideItem>
                            <SideItem>4+ Stars</SideItem>
                            <SideItem>5 Stars</SideItem>
                        </SideDrop>
                        
                        <SideDrop name="Duration">
                            <SideItem>0-3 Hours</SideItem>
                            <SideItem>4-9 Hours</SideItem>
                            <SideItem>10-15 Hours</SideItem>
                            <SideItem>16+ Hours</SideItem>
                        </SideDrop>
                        
                        <SideDrop name="Difficulty">
                            <SideItem>Beginner</SideItem>
                            <SideItem>Intermediate</SideItem>
                            <SideItem>Expert</SideItem>
                        </SideDrop>
                    </SideNav>
                </Container>
                <Footer/>
            </div>
        );
    }
}