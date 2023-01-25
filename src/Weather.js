import React, {useState} from "react";
import axios from "axios"
import "./Weather.css"
import WeatherInfo from "./WeatherInfo"
export default function Weather(props){
    const [weatherData, setWeatherData]=useState({ready:false});
   const[city,setCity]=useState(props.defaultCity);
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
    function handleSubmit(event){
        event.preventDefault()
    }
    function handleCityChange(event){
       setCity(event.target.value);
    }
   if(weatherData.ready){
     return(
        <div className="Weather">
            <form onSubmit={handleSubmit}>
    <div className="row">
    <div className="col-9">
    <input type="search" placeholder="Enter a city" className="form-control" autofocus="on" onChange={handleCityChange}/></div>
                
                 <div className="col-3"><input type="submit" value="Search" className="btn btn-primary w-100"/></div>
                </div>
        </form>
        <WeatherInfo data={weatherData}/>
            
        </div>
    )
   } else{
    const apiKey="5b74d10f3ef03caf1ac640b557c288c3";
    let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
return "in progress..";
}
   }