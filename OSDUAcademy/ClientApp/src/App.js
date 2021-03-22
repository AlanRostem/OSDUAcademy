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
import {CertificateChoice} from "./sections/CertificateChoice";
import Login from "./sections/Login";
import {CertificateTest} from "./sections/CertificateTest";
import {Teach} from "./sections/Teach";

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
                <Route path='/learn/:courseRoute/:section/:lecture' component={CourseInterface}/> 
                <Route path='/certificate-choice' component={CertificateChoice}/>
                <Route path='/certificate-test' component={CertificateTest}/>
                <Route path='/teach' component={Teach}/>
            </div>
        );
    }
}
