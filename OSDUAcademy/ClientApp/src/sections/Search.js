import React, {Component} from 'react';
import {Container} from "reactstrap";
import {DefaultNavMenu} from "../components/navbar/DefaultNavMenu";
import {Footer} from "../components/navbar/Footer";
import {SideNav} from "../components/sidebar/SideNav";
import {SideDrop} from "../components/sidebar/SideDrop";
import {SideItem} from "../components/sidebar/SideItem";
import '../components/sidebar/sideBar.css'

/**
 * Not used at this moment.
 *
 * The component returns a page to which a user gets redirected after using the search bar. The page is divided into
 * two main parts, the first one being a side navigation menu with various filters for searching. The second parts are
 * the search results (not implemented yet).
 */

export class Search extends Component {
    static displayName = Search.name;

    render() {
        return (
            <div>
                <DefaultNavMenu />
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