import React from "react";
import "./Weather.css"
export default function Weather(){
    return(
        <div className="Weather">
            <form>
                <div className="row">
                    <div className="col-9"><input type="search" placeholder="Enter a city" className="form-control" autofocus="on"/></div>
                
                 <div className="col-3"><input type="submit" value="Search" className="btn btn-primary w-100"/></div>
                </div>
            </form>
            <h1>New York</h1>
            <ul>
                <li>Thursday 02:00</li>
                <li>Cloudy</li>
            </ul>
            <div className="row">
                <div className="col-6">
                    <img src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png" alt="weather forecast" />
                    <span className="temperature">6</span> 
                    <span className="unit">°C</span>
                    </div>
                    <div className="col-6"> 
                    <ul>
                        <li> Precipitation: 2%  </li>
                    <li> Humidity: 67%  </li>
                    <li> Wind: 14 km/h  </li>
                    </ul>
                    </div>

            </div>

        </div>
    )
}