import React, {Component} from 'react';
import {Route} from 'react-router';
import {DefaultLayout} from './components/DefaultLayout';
import {Home} from './components/Home';
import {FetchData} from './components/FetchData';
import {Counter} from './components/Counter';

import './custom.css'

export default class App extends Component {
    static displayName = App.name;

    render() {
        return (
            <DefaultLayout>
                <Route exact path='/' component={Home}/>
                <Route path='/counter' component={Counter}/>
                <Route path='/fetch-data' component={FetchData}/>
            </DefaultLayout>
        );
    }
}
