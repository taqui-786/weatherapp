import React from "react";
import Img3 from './image/bunny.jpg'
import { FaFacebook , FaGithub, FaInstagram } from "react-icons/fa";;
function About(){
    return(<>
  <div className="max-width-cointain2">
        <div className="detail-page">
          <div className="detail">
            <h3>Welcome to Weather App</h3>
            <h1>My Name Is : MD TAQUI IMAM </h1>
            <button id="btn"><a href="/taqui">MY BLOG</a></button>
          </div>
        </div>
        <div className="img">
          <img src= {Img3} alt="weather" className="image1" id="image3"/>
        </div>
  <div className="social">
    <a href="https://www.facebook.com/taqui.rider.56"><FaFacebook/></a>
    <a href="https://www.instagram.com/taqui_imam_786/?utm_medium=copy_link"><FaInstagram/></a>
    <a href="https://github.com/taqui-786/#md-taqui-imam"><FaGithub/></a>
  </div>
      </div>
    </>
    )
}

export default About;