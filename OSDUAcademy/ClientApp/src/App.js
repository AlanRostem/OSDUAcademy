import React, {Component} from 'react';
import {Route} from 'react-router';
import {Layout} from './components/Layout';
import {FetchData} from './components/FetchData';
import AuthorizeRoute from './components/api-authorization/AuthorizeRoute';
import ApiAuthorizationRoutes from './components/api-authorization/ApiAuthorizationRoutes';
import {ApplicationPaths} from './components/api-authorization/ApiAuthorizationConstants';

import {Home} from './sections/Home';
import {Counter} from './components/Counter';
import {Homeli} from './sections/Homeli';
import {Search} from "./sections/Search";
import CourseFrontPage from "./sections/CourseFrontPage";
import {CourseInterface} from "./sections/CourseInterface";

import './custom.css'
import {CertificateChoice} from "./sections/CertificateChoice";
import Login from "./sections/Login";
import {CertificateTest} from "./sections/CertificateTest";
import {Teach} from "./sections/Teach";
import {Success} from "./components/certificate/Success";
import {Fail} from "./components/certificate/Fail";
import {FedLogin} from "./sections/FedLogin";

export default class App extends Component {
    static displayName = App.name;

    render() {
        return (
            <Layout>
                <Route exact path='/' component={Home}/>
                <Route path='/counter' component={Counter}/>
                <AuthorizeRoute path='/home-li' component={Homeli}/>
                <Route exact path='/login-page' component={Login}/>
                <Route path='/federated' component={FedLogin}/>
                <Route path='/login-page/:courseRoute' component={Login}/>
                <Route path='/course-front-page/:courseRoute' component={CourseFrontPage}/>
                <AuthorizeRoute path='/course-interface' component={CourseInterface}/>
                <AuthorizeRoute path='/fetch-data' component={FetchData}/>
                <Route path={ApplicationPaths.ApiAuthorizationPrefix} component={ApiAuthorizationRoutes}/>
                <AuthorizeRoute path='/learn/:courseRoute' component={CourseInterface}/>
                <AuthorizeRoute path='/choose-to-certify/:courseRoute' component={CertificateChoice}/>
                <AuthorizeRoute path='/certification/:courseRoute' component={CertificateTest}/>
                <AuthorizeRoute path='/teach' component={Teach}/>
                <AuthorizeRoute path='/success' component={Success}/>
                <AuthorizeRoute path='/fail' component={Fail}/>
            </Layout>
        );
    }
}
