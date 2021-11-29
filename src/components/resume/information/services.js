import React from 'react';
import HTML5 from "../img/html5.png";
import CSS3 from "../img/css3.png";
import JAVASCRIPT from "../img/javascript.png";
import SASS from "../img/sass.png";
import JQUERY from "../img/jquery.png";
import REACTJS from "../img/reactjs.png";

const services = () => {
  return (
        <div className="services">
          <h3 className="title">my services</h3>
          <div className="box-container">
            <div className="box">
              <img src={HTML5} alt="" />
              <h3>HTML 5</h3>
            </div>
            <div className="box">
              <img src={CSS3} alt="" />
              <h3>CSS 3</h3>
            </div>
            <div className="box">
              <img src={JAVASCRIPT} alt="" />
              <h3>Javascript</h3>
            </div>
            <div className="box">
              <img src={JQUERY} alt="" />
              <h3>Jquery</h3>
            </div>
            <div className="box">
              <img src={SASS} alt="" />
              <h3>SASS</h3>
            </div>
            <div className="box">
              <img src={REACTJS} alt="" />
              <h3>React.js</h3>
            </div>
          </div>
        </div>
  );
};

export default services;