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
import {Success} from "./components/certificate/Success";
import {Fail} from "./components/certificate/Fail";
import {FedLogin} from "./sections/FedLogin";
import {Profile} from "./sections/Profile";

export default class App extends Component {
    static displayName = App.name;

    render() {
        return (
            <div>
                <Route exact path='/' component={Home}/>
                <Route path='/counter' component={Counter}/>
                <Route path='/fetch-data' component={FetchData}/>
                <Route path='/home-li' component={Homeli}/>
                <Route exact path='/login-page' component={Login}/>
                <Route path='/federated' component={FedLogin}/>
                <Route path='/login-page/:courseRoute' component={Login}/>
                <Route path='/course-front-page/:courseRoute' component={CourseFrontPage}/>
                <Route path='/course-interface' component={CourseInterface}/>
                <Route path='/learn/:courseRoute' component={CourseInterface}/>
                <Route path='/choose-to-certify/:courseRoute' component={CertificateChoice}/>
                <Route path='/certification/:courseRoute' component={CertificateTest}/>
                <Route path='/teach' component={Teach}/>
                <Route path='/success' component={Success}/>
                <Route path='/fail' component={Fail}/>
                <Route path='/profile' component={Profile}/>
            </div>
        );
    }
}
