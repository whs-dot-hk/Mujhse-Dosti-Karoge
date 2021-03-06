import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Slider from "react-slick";

class App extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          <h1>Mujhse Dosti Karoge!</h1>
          <div className="w-90 center">
            <Slider {...settings}>
              <div>
                <img className="center" src="1.jpg" alt="Rani Mukerji" />
              </div>
              <div>
                <img className="center" src="2.jpg" alt="Kiss her!" />
              </div>
            </Slider>
          </div>
        </p>
      </div>
    );
  }
}

export default App;
