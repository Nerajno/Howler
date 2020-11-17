import React, { useState } from 'react';
import Conditions from '../Conditions/Conditions';

const Forecast = () => {

    let [ responseObj, setResponseObj ] = useState({}); 

    function getForecast() {
      fetch(
        "https://community-open-weather-map.p.rapidapi.com/weather?q=Atlanta&lat=0&lon=0&callback=test&id=2172797&lang=null&units=%22metric%22%20or%20%22imperial%22&mode=xml%2C%20html",
        {
          method: "GET",
          headers: {
            "x-rapidapi-key":"d3b860f740mshc1d2a46e7966dfcp1e458ajsn4c6bcc397e7b",
            "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
          },
        }
      )
        .then(response => response.json())
        .then(response => {setResponseObj(response)
        })
        .catch((err) => {
          console.error(err);
        });
    }

    return (
        <div>
    
            <div>
                <h2>Find Current Weather Conditions</h2>
                <div>
                JSON.stringify(responseObj)
                </div>
                <button  onClick={getForecast}> Get Forecast</button>
                <Conditions responseObj = {responseObj} />
            </div>
            
        </div>
    )
}

export default Forecast;
//needs to fix the api call