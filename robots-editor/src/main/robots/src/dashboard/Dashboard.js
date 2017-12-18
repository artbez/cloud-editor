import React from 'react'
import robotImg from './robot.jpeg'
import './Dashboard.css'

class Dashboard extends React.Component {

  renderList = () => {
    const robots = this.state.robots;
    const listItems = robots.map((robot) =>
      <tr>
        <td className={'imgTd'}>
          <img src={robotImg} className="img-responsive" alt="Image"/>
        </td>
        <td><p className={'robotTxt'}>{robot.name}</p></td>
        <td><p className={'robotTxt'}>{robot.type}</p></td>
        <td><p className={'robotTxt'}>{robot.description}</p></td>
      </tr>
    );
    return (listItems);
  };
  robotForm = () => {
    return (
      <tr>
        <td>
          <button type="submit" class="btn btn-default" onClick={this.saveRobot}>Submit</button>
        </td>
        <td>
          <input type="text" class="form-control" id="robotName"
                 value={this.state.newRobotName} onChange={evt => this.updateRobotName(evt)}/>
        </td>
        <td>
          <input type="text" class="form-control" id="robotType"
                 value={this.state.newRobotType} onChange={evt => this.updateRobotType(evt)}/>
        </td>
        <td>
          <textarea type="text" className={'form-control'} id={'robotDescription'}
                    value={this.state.newRobotDescription} onChange={evt => this.updateRobotDescription(evt)}/>
        </td>
      </tr>);
  };

  constructor(props) {
    super(props);
    this.state = {
      robots: [],
      newRobotName: '',
      newRobotType: '',
      newRobotDescription: ''
    };
    this.saveRobot = this.saveRobot.bind(this);
    this.getAll = this.getAll.bind(this);
  }

  componentDidMount() {
    this.getAll();
  }

  getAll() {
    fetch('/robots/all', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((responseText) => responseText.json())
      .then((response) =>
        this.setState({
          robots: response,
          newRobotName: '',
          newRobotType: '',
          newRobotDescription: ''
        }));
  }

  saveRobot() {
    fetch('/robots/save', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: this.state.newRobotName,
        type: this.state.newRobotType,
        description: this.state.newRobotDescription
      })
    }).then((responseText) => this.getAll());
  }

  updateRobotName(evt) {
    this.setState({
      newRobotName: evt.target.value
    });
  }

  updateRobotType(evt, st) {
    this.setState({
      newRobotType: evt.target.value
    });
  }

  updateRobotDescription(evt, st) {
    this.setState({
      newRobotDescription: evt.target.value
    });
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <table className="table table-hover">
              <thead>
              <tr>
                <td>
                </td>
                <td>
                  <p className={'robotTxtHeader'}>
                    Name
                  </p>
                </td>
                <td>
                  <p className={'robotTxtHeader'}>
                    Type
                  </p>
                </td>
                <td>
                  <p className={'robotTxtHeader'}>
                    Description
                  </p>
                </td>
              </tr>
              </thead>
              <tbody>
              {this.renderList()}
              {this.robotForm()}
              </tbody>
            </table>
          </div>
          <div className="col-md-2"></div>
        </div>
      </div>
    );
  }
}

export default Dashboard