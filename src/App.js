import React, { useState,useEffect } from 'react';
import './App.css';
import { useSelector, useDispatch } from "react-redux";
import { fetchWeather } from "./redux/actions/fetchWeather";
import data from "./state.json";

function App() {
  const [city, setCity] = useState("");

  const weatherSelector = useSelector((state) => state.weatherinfor);

  const dispatch = useDispatch();
  const getWeatherInfoAction = (city) => dispatch(fetchWeather(city));
  
  useEffect(() => {
    getWeatherInfoAction("1581129")
  }, [])

  const getWeatherInfor = (e) => {
    e.preventDefault();

    if (city === "") {
      console.log('no city to search for');
    } else {
      getWeatherInfoAction(city)
    }

  };

  let detailWeather = "";

  if (weatherSelector.name) {
    detailWeather = (
<div className="container">
  <div className="weather-side">
    <div className="weather-gradient" />
    <div className="date-container">
      <strong className="location">{weatherSelector.name}, {weatherSelector.sys.country}</strong>
    </div>
    <div className="weather-container">
      <h3 className="weather-temp">{(weatherSelector.main.temp/13.2).toFixed(2)  }°C</h3>
    </div>
    <div className="info-side">
      <div className="today-info-container">
        <div className="today-info">
          <div className="precipitation"> 
            <span className="title">CLOUDS</span><span className="value">{weatherSelector.clouds.all} %</span>
            <div className="clear" />
          </div>
          <div className="humidity"> 
            <span className="title">HUMIDITY</span><span className="value">{weatherSelector.main.humidity} %</span>
            <div className="clear" />
          </div>
          <div className="wind"> 
            <span className="title">WIND</span><span className="value">{weatherSelector.wind.speed} km/h - {weatherSelector.wind.deg} Deg</span>
            <div className="clear"/>
          </div>
          <div className="wind"> 
            <span className="title">VISIBILITY</span><span className="value">{weatherSelector.visibility} m</span>
            <div className="clear"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    )
  } else {
    <div className="details"> You need to choose state. </div>
  }
  
  return (
    <div className="App">
      <h3 className="text-white"><center>REACT-REDUX WEATHER APP</center></h3>
      <br/>
      <form onSubmit={getWeatherInfor}>
        <div className="form-row">
          <div className="btn-group col-12 justify-content-between align-items-center">
            <select id="inputState" className="form-control col-7 bg-dark text-white" value={city} onChange={e => setCity(e.target.value)}>
              <option value="">Choose State</option>
              {
                data.map(val => {
                  return (
                    <option value={val.id} key={val.id}>{val.name}</option>
                  )
                })
              }
            </select>
            <button type="submit" className="btn-dark col-4 btn-md location-button" >Check</button>
          </div>
        </div>
      </form>

      <br/>
      <br/>
      
      { detailWeather }
    </div>
  );
}

export default App;
