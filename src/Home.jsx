import React from "react";

import { Link } from "react-router-dom";
import WeatherImg from "./image/weather.jpg";
function Home() {
  return (
    <>
      <div className="main">
        <div className="max-width-cointain">
          <div className="detail-page">
            <div className="detail">
              <h3>Welcome to Weather App</h3>
              <h1>Get the Latest Weather Info of Your City</h1>
              <button id="btn">
                <Link to="/weather">Check Now!</Link>
              </button>
            </div>
          </div>
          <div className="img">
            <img src={WeatherImg} alt="weather" className="image1" id="image" />
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;
