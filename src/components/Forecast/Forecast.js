import React, { useState } from 'react';
import Conditions from '../Conditions/Conditions';

// TO DO
// Hide api key in .env file. You'll need to install the dotenv package
// Require the dotenv in index.js
// Create a .env file and set a variable with you key
// call process.env.Your_.ENV_Variable_Name and enterpolate in the headers
const Forecast = () => {
  const url = 'https://community-open-weather-map.p.rapidapi.com/weather?q=Atlanta&lat=0&lon=0&callback=test&id=2172797&lang=null&units=%22metric%22%20or%20%22imperial%22&mode=xml%2C%20html';
  const key = 'd3b860f740mshc1d2a46e7966dfcp1e458ajsn4c6bcc397e7b'
  const [responseObj, setResponseObj] = useState({});

// <<<<<<< HEAD
//     const [ responseObj, setResponseObj ] = useState({}); // hooks

//     const getForecast = () => {
//             fetch("https://climacell-microweather-v1.p.rapidapi.com/weather/nowcast?lat=33.748997&lon=-84.387985",{
//                 "method": "GET",
//                 "headers": {
//                     "x-rapidapi-key": "d3b860f740mshc1d2a46e7966dfcp1e458ajsn4c6bcc397e7b",
//                     "x-rapidapi-host": "climacell-microweather-v1.p.rapidapi.com"
//             }
//         })
//         .then(response => response.json())
//         .then(response => {setResponseObj(response[0])
//         })
//         .catch((err) => {
//           console.error(err);
//         });
//     }

//     return (
//         <div>
    
//             <div>
//                 <h2>Find Current Weather Conditions</h2>
//                 <div>
//                 {JSON.stringify(responseObj)}
//                 </div>
//                 <button  onClick={getForecast}> Get Forecast</button>
//                 <Conditions responseObj = {responseObj} />
//             </div>
            
// =======
  const getForecast = () => {
    fetch(url,
      {
        method: "GET",
        headers: {
          "x-rapidapi-key": key,
          "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
        },
      })
      .then(response => response.text())
      .then(data => setResponseObj(data))
      .catch((err) => {
        console.error(err);
      });
  }

  return (
    <div>
      <div>
        <h2>Find Current Weather Conditions</h2>
        <div>
          {responseObj.length > 1 ? JSON.stringify(responseObj) : null}
        </div>
        <button onClick={getForecast}>Get Forecast</button>
        <Conditions responseObj={responseObj} />
      </div>
    </div>
  )
}

export default Forecast;