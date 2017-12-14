import React, {Component} from 'react';
import './welcomeCommonInfo.css'

class WelcomeCommonInfo extends Component {
  render() {
    return (
      <div class={'container-fluid bg-2 text-center'}>
        <h3 class={'margin'}> What is this? </h3>
        <p>It is simple dashboard so that you can pick application you want to use.
          All system based on the microservice architecture. Here new modules and other info will be attached.
        </p>
      </div>
    );
  }
}

export default WelcomeCommonInfo;
