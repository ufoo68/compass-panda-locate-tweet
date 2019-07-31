import React, {Component} from 'react';
import './App.css';
import Form from './Form';
import * as unixtime from 'unix-time';

export default class App extends Component {
  handleSubmit = (values) => {
    navigator.geolocation.getCurrentPosition((position) => {
      const locateTweet = {};
      const timestamp = unixtime(new Date());
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      const tweet = values["tweet"];
      locateTweet[timestamp] = {
        latitude,
        longitude,
        tweet
      };
      fetch('https://compasspandaapi.firebaseapp.com/locate',
        {method:'POST', body:JSON.stringify(locateTweet)}
      ).then((response) => {
        alert('success!');
        console.log(response.body);
        window.close();
      }
      ).catch((error) =>{
        alert('post error');
        console.error(error);
        window.close();
      });
    }, (err) => {
      alert('geolocated error');
      console.log(err);
      window.close();
    }, {
        enableHighAccuracy: false, 
        timeout: 1000, 
        maximumAge: 1000
    });
  };
  render() {
    return (
      <div className="App">
        <Form onValidSubmit={this.handleSubmit} />
      </div>
    );
  }
}
