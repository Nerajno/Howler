import React, { useState } from 'react';
import Conditions from '../Conditions/Conditions';

const Forecast = () => {

    let [  responseObj, setResponseObj ] = useState({}); 

    function getForecast() {
                fetch("https://climacell-microweather-v1.p.rapidapi.com/weather/nowcast?lat=33.748997&lon=-84.387985",{
                "method": "GET",
                "headers": {
                    "x-rapidapi-key": "d3b860f740mshc1d2a46e7966dfcp1e458ajsn4c6bcc397e7b",
                    "x-rapidapi-host": "climacell-microweather-v1.p.rapidapi.com"
            }
        })
        .then(response => response.json())

        .then(response => {setResponseObj(response[0])}) //

        .catch(err => {
            console.error(err);
        });
    }

    return (
        <div>
            <h2>Find Current Weather Conditions</h2>
            <div>
                {JSON.stringify(responseObj)}
            </div>
            <button  onClick={getForecast}> Get Forecast</button>
        </div>
    )
}

export default Forecast;
//needs to fix the api call