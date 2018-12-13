import React from "react";

import Titles from "./components/Titles.jsx";
import Form from "./components/Form.jsx";
import Weather from "./components/Weather.jsx";
import Image from "./components/img.jsx"
var moment = require('moment');

const API_KEY = "1cfe6a58c05225f62d268d1eeae286a5";

class App extends React.Component {
  state = {
    temperature: undefined,
    country: undefined,
    humidity: undefined,
    icon: undefined,
    wind: undefined,
    sunrise: undefined
  }
  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/forecast/daily?q=${city},${country}&cnt=5&appid=${API_KEY}&units=Imperial`);
    const api_call2 = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=Imperial`);
    const data = await api_call.json();
    this.dataList = data.list
    const data2 = await api_call2.json();
    var sunrise = data2.sys.sunrise
    // eslint-disable-next-line 
    var date = new Date(sunrise * 1000);
    // eslint-disable-next-line 
    var date = moment(date).format('HH:mm a');
    if (city && country) {
      this.setState({
        temperature: data2.main.temp,
        state: data2.weather[0].description,
        humidity: data2.main.humidity,
        icon: data2.weather[0].icon,
        wind: data2.wind.speed,
        sunrise: date
      });
      // eslint-disable-next-line 
      var img = this.state.icon
    } else {
    }
  }
  // eslint-disable-next-line 
  constructor(props) {
    super(props);
  }
  render() {
    if (this.dataList) {
      for (var e in this.dataList){
        this.dataList[e].dt  = new Date(this.dataList[e].dt * 1000);
        // eslint-disable-next-line 
        this.dataList[e].dt  = moment(this.dataList[e].dt).format('dddd');
        // this.dataList.push(this.newDate)
      }
      console.log(this.dataList)
      this.listItems = this.dataList.map((row, i) => 
        <li className="list-group-item" key={i}>
          <div className="row">
            <div className="col">{row.dt}</div>
            <div className="col"><Image icon={row.weather[0].icon} /></div>
            <div className="col">{row.temp.max} <sup>°F</sup></div>
            <div className="col">{row.temp.min} <sup>°F</sup></div>
            <div className="col ml-auto">{row.weather[0].description}</div>
          </div>
        </li>
      ) 
    }
    let title
    if (this.state.temperature > 0) {
      title = <h1 className="ml-5 d-flex  text-white"><strong className=" d-flex">{this.state.temperature}<span className="h4 d-flex mb-auto">°F</span> </strong></h1>;
    } else {
      title = <Titles />
    }
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-8 mx-auto mt-5">
            <div className="card">
              <div className="d-flex card-header py-5">
                <div className="temp d-flex">
                  <Image icon={this.state.icon} />
                  {title}
                </div>
                <div className="select-city mx-auto mr-5 pr-4 text-white">
                  <div className="w-100"><h1 className="">{this.state.state}</h1></div>
                  <Form getWeather={this.getWeather} />
                </div>
              </div>
              {/* eslint-disable-next-line  */}
              <Weather
                temperature={this.state.temperature}
                humidity={this.state.humidity}
                state={this.state.state}
                icon={this.state.icon}
                sunrise={this.date}
                wind={this.state.wind}
                sunrise={this.state.sunrise}
              />
              <ul className="list-group">
                {this.listItems}
              </ul>
              <div className="w-100">
                <div className="d-table mt-2 mx-auto">
                  <span className="mt-3 mx-3 text-white">°C</span>
                  <label class="switch">
                    <input type="checkbox"/>
                    <span class="slider round"></span>
                  </label>
                  <span className="mt-3 mx-3 text-white">°F</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

};

export default App;
