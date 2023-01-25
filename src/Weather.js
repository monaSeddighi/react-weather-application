import React, {useState} from "react";
import axios from "axios"
import "./Weather.css"
import FormattedDate from "./FormattedDate"
export default function Weather(props){
    const [weatherData, setWeatherData]=useState({ready:false});
    function handleResponse(response){
setWeatherData({
ready:true, 
temperature: response.data.main.temp,
humidity: response.data.main.humidity,
date: new Date(response.data.dt*1000),
description:response.data.weather[0].descrption,
iconUrl:"https://ssl.gstatic.com/onebox/weather/64/cloudy.png",
wind:response.data.wind.speed,
city:response.data.name
});

    }
   if(weatherData.ready){
     return(
        <div className="Weather">
            <form>
                <div className="row">
                    <div className="col-9"><input type="search" placeholder="Enter a city" className="form-control" autofocus="on"/></div>
                
                 <div className="col-3"><input type="submit" value="Search" className="btn btn-primary w-100"/></div>
                </div>
            </form>
            <h1>{weatherData.city}</h1>
            <ul>
                <li><FormattedDate date={weatherData.date}/></li>
                <li className="text-capitalize">{weatherData.description}</li>
            </ul>
            <div className="row mt-3">
 <div className="col-6">
<div className="d-flex">
 <img src={weatherData.iconUrl} alt={weatherData.description} />
       <span className="temperature">{Math.round(weatherData.temperature)}</span> 
     <span className="unit">°C</span>
  </div>
  </div>

 <div className="col-6"> 
 <ul>
<li> Humidity: {weatherData.humidity}%  </li>
<li> Wind: {Math.round(weatherData.wind)} km/h  </li>
 </ul>
 </div>
  </div>
        </div>
    )
   } else{
    const apiKey="5b74d10f3ef03caf1ac640b557c288c3";
    let city="New York"
    let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
return "in progress..";
}
   }