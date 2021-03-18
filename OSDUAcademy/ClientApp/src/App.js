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

export default class App extends Component {
    static displayName = App.name;

    render() {
        return (
            <Layout>
                <Route exact path='/' component={Home}/>
                <Route path='/counter' component={Counter}/>
                <Route path='/home-li' component={Homeli}/>
                <Route path='/search' component={Search}/>
                <Route path='/course-front-page/:courseRoute' component={CourseFrontPage}/>
                <Route path='/course-interface' component={CourseInterface}/>
                <AuthorizeRoute path='/fetch-data' component={FetchData}/>
                <Route path={ApplicationPaths.ApiAuthorizationPrefix} component={ApiAuthorizationRoutes}/>
            </Layout>
        );
    }
}
