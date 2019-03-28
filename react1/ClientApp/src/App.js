import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import { Power } from './components/Test';
import { Form } from './components/Form';
import { CardList } from './components/Card';

import { VitecFetch } from './components/VitecFetch';

import { Rubrik } from './components/Rubrik';
import { CheckboxContainer } from './components/CheckboxContainer';
import { OtherInformation } from './components/OtherInformation';

import './css/css.css';
//import axios from 'axios';

const testData = [
    { name: "Dan Abramov", avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4", company: "@facebook" },
    { name: "Sophie Alpert", avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4", company: "Humu" },
    { name: "Sebastian Markbåge", avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4", company: "Facebook" },
];

// Back to basic

export default class App extends Component {
    static displayName = App.name;
    constructor(props) {
        super(props);
        this.state = {
            profiles: testData,
        };
    }
    render() {
        return (
            <Layout>
                <div>
                    <Rubrik rubrik="Best&auml;llningsinformation" />
                    <CheckboxContainer />
                    <OtherInformation />
                    
                </div>
                <Route path='/VitecFetch' component={VitecFetch} />  
                    {/*
                        <Power />
                    <div className="header">{this.props.title}</div>
                    <Form />
                    <CardList profiles={this.state.profiles} />
               
                <Route exact path='/' component={Home} />
                <Route path='/counter' component={Counter} />
                <Route path='/fetch-data' component={FetchData} />                
                <Route path='/Card' component={CardList} />
                    <Route path='/CheckboxContainer' component={CheckboxContainer} />
                    */}

            </Layout>

        );
    }
}
{/*
 * Å Ä Ö codes if neaded
å & aring;  &#229;
ä & auml;   &#228;
ö & ouml;   &#246;
Å & Aring;  &#197;
Ä & Auml;   &#196;
Ö & Ouml;   &#214;
*/}