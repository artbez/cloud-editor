import React, {Component} from 'react';
import './welcomeService.css'
import robots from './robots.png'
import roboshop from './roboshop.jpg';
import bpmn from './bpmn.png'

class WelcomeService extends Component {
  render() {
    return (
      <div class="container-fluid bg-3 text-center">
        <h3 class="margin">Pick service you want to use</h3><br/>
        <div class="row">
          <div class="col-sm-4">
            <p>The robots editor. Here you can create diagrams of robot's activities
              and generate source code for you own robot.</p>
            <img src={robots} class="img-responsive margin" alt="Image"/>
          </div>
          <div class="col-sm-4">
            <p>Online robo shop. Here you can buy and download some updates, visit forum and etc. </p>
            <img src={roboshop} class="img-responsive margin" alt="Image"/>
          </div>
          <div class="col-sm-4">
            <p>Good, powerfull editor for bpmn-diagrams creation.</p>
            <img src={bpmn} class="img-responsive margin" alt="Image"/>
          </div>
        </div>
      </div>
    );
  }
}

export default WelcomeService;