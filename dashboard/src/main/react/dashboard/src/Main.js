import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom'
import WelcomePage from './welcome/WelcomePage';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' render={() => <Redirect to={'/dashboard/'}/>}/>
      <Route exact path='/dashboard' component={WelcomePage}/>
      <Route exact path='/dashboard/' component={WelcomePage}/>
    </Switch>
  </main>
);

export default Main