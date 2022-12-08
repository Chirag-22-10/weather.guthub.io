import React, { useEffect, useState } from "react";


const Weather = ()=>{
    
    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("mumbai");

    useEffect(()=>{
      const fetchApi = async()=>{
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=6dbe35cdc84f5e606a410dcc5f6a1af5`
             const response = await fetch(url);
            //  console.log(response);
            const resJson = await response.json();
            setCity(resJson);
      }
        fetchApi();
    })
     return(
        <>
        <div className="box">
            <div className="inputData">
                <input type='search' className="InputField" onChange={ (event)=> {
setSearch(event.target.value)
                }}></input>
            </div>
            <div className="info">
                <h2 className="location">{search}</h2>
                <h1 className="temp">{setCity}</h1>
                <h1 className="tempmin">{setSearch}</h1>
            </div>
        </div>
        </>
     )
}
export default Weather;