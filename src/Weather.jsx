import React from "react";
import { useState } from "react";
import { WiCloudy , WiDaySunnyOvercast , WiDayRain , WiDayHaze, WiDayStormShowers} from "react-icons/wi";
import { FaSearchLocation} from "react-icons/fa";
function Weather() {
  const [inpData, setData] = useState();
  // console.log(inpData)
  const [apiData, setApi] = useState({
    city: "....",
    degree: " 0.0",
    description: "....",
    status: "!",
  });
  const [sLogo, setLogo] = useState();
  
  const getInfo = async (event) => {
    event.preventDefault();
    if (event.target[0].value === "") {
      alert("PLease enter city name....")
      setApi((prev) => {
        return {
          ...prev,
          city: '',
          degree: '',
          description: '',
          status: '',
        }})
    } else {
      try {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${inpData}&appid=4d8c966462ce403084d310def37f7cec`;
        const fetchData = await fetch(url);
        const data = await fetchData.json();
        const status_logo = data.weather[0].main;
        status_logo === "Clouds" ? setLogo("ok") : setLogo("no");
        if (status_logo === "Clouds") {
          setLogo(<WiCloudy/>);
        } else if (status_logo === "Clear") {
          setLogo(<WiDaySunnyOvercast/>);
        } else if (status_logo === "Rain") {
          setLogo(<WiDayRain/>);
        } else if (status_logo === "Haze") {
          setLogo(<WiDayHaze/>);
        } else {
          setLogo(<WiDayStormShowers/>);
        }
        setApi((prev) => {
          return {
            ...prev,
            city: data.name,
            degree: Math.round((data.main.temp)-273.15),
            description: data.weather[0].description,
            status: sLogo,
          };
        });
      } catch (err) {
        //
        event.target[0].value = " 💢Failed to Load💢";
        console.log(err);
      }
    }
  };

  return (
    <>
      <div className="main-weather">
        <div className="weather-input">
          <form action="" className="weather-form" onSubmit={getInfo}>
            <input
              type="text"
              id="input-data"
              autoComplete="off"
              placeholder="Enter city name"
              value={inpData}
              onChange={(e) => {
                setData(e.target.value);
              }}
            />
            <button type="submit"  id="weather-btn" ><FaSearchLocation/></button>
          </form>
        </div>
        <div className="weather-result">
          <div className="city-name" id="c-name">
            {apiData.city}
          </div>
          <div className="city-degree">
            {" "}
            <span id="degree">{apiData.degree}</span>
            <sup id="sup">0</sup>
            <span id="celcius">C</span>
          </div>
          <span id="status_description">{apiData.description}</span>
          <span id="status">{sLogo}</span>
        </div>
      </div>
    </>
  );
}

export default Weather;
