import React, { useEffect, useState } from "react";
import './style.css'


const Weather = ()=>{
    
    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("Mumbai");

    useEffect(()=>{
      const fetchApi = async()=>{
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=6dbe35cdc84f5e606a410dcc5f6a1af5`
             const response = await fetch(url);
            //  console.log(response);
            const resJson = await response.json();
            console.log(resJson.main)
            setCity(resJson.main);
      };
        fetchApi();
        
    }, [search] )
     return(
        <>
        <div className="box">
            <h1 className="heading">Weather App</h1>
            <div className="inputData">
                <input type='search' className="InputField" onChange={ (event)=> {
setSearch(event.target.value)
                }}></input>
            </div>
            {!city ? (
                <p className="error">No Data Found</p>
            ) : (
<div className="info">
                <h2 className="location">{search}</h2>
                <h1 className="temp">{city.temp_max}°C</h1>
                <h1 className="tempmin">Min{city.temp_min}°C | Max{city.temp_max}°C</h1>
            </div>

            )

            }
                    </div>
        </>
     )
}
export default Weather;