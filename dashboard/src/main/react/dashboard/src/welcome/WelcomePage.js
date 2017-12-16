import React, {Component} from 'react';
import WelcomeNavbar from './navbar/WelcomeNavbar.js';
import WelcomeCommonInfo from './commonInfo/WelcomeCommonInfo'
import WelcomeService from './services/WelcomeService'
import WelcomeFooter from './footer/WelcomeFooter'
import './welcome.css'

class WelcomePage extends Component {
  render() {
    return (
      <div>
        <WelcomeNavbar/>
        <WelcomeCommonInfo/>
        <WelcomeService/>
        <WelcomeFooter/>
      </div>
    );
  }
}

export default WelcomePage;