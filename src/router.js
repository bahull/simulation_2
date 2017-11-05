
import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom';
import WizardOne from './components/WizardOne';
import WizardTwo from './components/WizardTwo';
import WizardThree from './components/WizardThree';
import WizardFour from './components/WizardFour';
import WizardFive from './components/WizardFive';
import Header from './components/Header';

import Dashboard from './components/Dashboard';
import {Switch} from 'react-router-dom';

export default (
<Switch >
    
    <Route component={Header} exact path = '/'/>

    <Route component={WizardOne} path = '/wizard/1'/>
    <Route component={WizardTwo}  path = '/wizard/2'/>
    <Route component={WizardThree} path = '/wizard/3'/>
    <Route component={WizardFour} path = '/wizard/4'/>
    <Route component={WizardFive} path = '/wizard/5'/>
    <Route component={Dashboard} path = '/dashboard'/>





</Switch>
)