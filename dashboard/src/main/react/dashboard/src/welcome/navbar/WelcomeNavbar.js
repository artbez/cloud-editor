import React, {Component} from 'react';
import Navbar from 'react-bootstrap/lib/Navbar';
import './welcomeNavbar.css'

class WelcomeNavbar extends Component {
  render() {
    return (<Navbar class={'navbar-default'}>
      <div class="container">
        <Navbar.Header>
          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
            <span class="icon-bar"/>
            <span class="icon-bar"/>
            <span class="icon-bar"/>
          </button>
          <a class="navbar-brand" href="/">Dashboard</a>
        </Navbar.Header>
        <div class="collapse navbar-collapse" id="myNavbar">
          <ul class="nav navbar-nav navbar-right">
            <li><a href="#">Account</a></li>
            <li><a href="#">Logout</a></li>
          </ul>
        </div>
      </div>
    </Navbar>);
  }
}

export default WelcomeNavbar;