import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom'
import Dashboard from './dashboard/Dashboard';
import WelcomeNavbar from './navbar/WelcomeNavbar';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' render={() => <Redirect to={'/robots-editor/'}/>}/>
      <Route exact path='/robots-editor' component={MyProductPage}/>
      <Route exact path='/robots-editor/' component={MyProductPage}/>
    </Switch>
  </main>
);

const MyProductPage = (props) => {
  return (
    <div>
      <WelcomeNavbar/>
      <Dashboard/>
    </div>
  );
};

export default Main