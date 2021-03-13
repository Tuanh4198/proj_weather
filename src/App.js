import React, { useState } from 'react';
// useEffect
import { useSelector, useDispatch } from "react-redux";
import { fetchWeather } from "./redux/actions/fetchWeather";

function App() {
  const [city, setCity] = useState("");

  const weatherSelector = useSelector((state) => state.weatherinfor);

  const dispatch = useDispatch();
  const getWeatherInfoAction = (city) => dispatch(fetchWeather(city));  

  
  const getWeatherInfor = (e) => {
    e.preventDefault();
    if (city === "") {
      console.log('no city to search for');
    } else {
      new Promise(() => {
        getWeatherInfoAction(city)
      })
      .then(() => {
        console.log(weatherSelector.weather);
      })
      .catch(err => {
        console.log(err);
      })
    }
  };
  

  return (
    <div className="container">
      <h3><center>REACT-REDUX WEATHER APP</center></h3>
      <br/>
      <form onSubmit={getWeatherInfor}>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="inputEmail4">State</label>
            <input type="text" className="form-control" 
                placeholder="Enter city name..." 
                value={city} 
                onChange={e => setCity(e.target.value)} />
          </div>
          {/*  */}
          {/* <div className="form-group col-md-4">
            <label htmlFor="inputState">State</label>
            <select id="inputState" className="form-control" value={city} >
              <option selected>Choose...</option>
              <option>...</option>
            </select> */}
          {/* </div> */}
        </div>
        {/*  */}
        <button type="submit" className="btn-dark btn-sm">Check Weather</button>
      </form>
    </div>
  );
}

export default App;
