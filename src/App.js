import React, {Component} from 'react';
import './App.css';
import Geolocated from './Geolocated';
import Form from './Form';

export default class App extends Component {
  handleSubmit = (values) => {
    console.log(values);
  };
  render() {
    return (
      <div className="App">
        <Geolocated/>
        <Form onValidSubmit={this.handleSubmit} />
      </div>
    );
  }
}
