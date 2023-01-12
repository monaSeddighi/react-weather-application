import React from "react";
import "./Weather.css"
export default function Weather(){
    return(
        <div className="Weather">
            <h1>New York</h1>
            <ul>
                <li>Thursday 02:00</li>
                <li>Cloudy</li>
            </ul>
            <div className="row">
                <div className="col-6">
                    <img src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png" alt="weather forecast"/>
                    6°C</div>
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