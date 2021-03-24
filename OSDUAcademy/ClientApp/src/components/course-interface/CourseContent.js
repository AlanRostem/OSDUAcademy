import React, {Component} from 'react';
import JsxParser from "react-jsx-parser"
import {Redirect} from "react-router-dom";

/**
 * The component returns a horizontal unordered list with three list elements, the first and third being chevrons to 
 * the previous and next chapter respectively. The difference between those chevrons is that the right chevron has a 
 * function "handleNextClick" bound for itself. The second list item is the course section content, wrapped in a 
 * <JsxParser/> tag which takes jsx code and parses it as a string (outputs React component). The component is used 
 * in the "CourseInterface" component. 
 */

export class CourseContent extends Component {
    static displayName = CourseContent.name;
    
    /** the default state is that the user cannot progress to the certification quiz**/
    state = {takeTest: false}
    
    /** when the right chevron is clicked, the state changes to true and component re-renders, allowing the user to 
     * take the test **/
    handleNextClick() {
        this.setState( {takeTest: true});
    }
    
}