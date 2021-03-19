import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import {Home} from './sections/Home';
import {FetchData} from './sections/FetchData';
import {Counter} from './sections/Counter';
import {Homeli} from './sections/Homeli';
import './custom.css'
import {Search} from "./sections/Search";
import CourseFrontPage from "./sections/CourseFrontPage";
import {CourseInterface} from "./sections/CourseInterface";
import Login from "./sections/Login";


export default class App extends Component {
    static displayName = App.name;

    render() {
        return (
            <div>
                <Route exact path='/' component={Home}/>
                <Route path='/counter' component={Counter}/>
                <Route path='/fetch-data' component={FetchData}/>
                <Route path='/home-li' component={Homeli}/>
                <Route path='/login-page' component={Login}/>
                <Route path='/course-front-page/:courseRoute' component={CourseFrontPage}/>
                <Route path='/course-interface' component={CourseInterface}/> 
            </div>
        );
    }
}
