import React from "react";
import "./App.css";
import Img1 from "../../img/img-1.jpg";
import Img2 from "./img/img-2.jpg";
import Img3 from "./img/img-3.jpg";
import Img4 from "./img/img-4.jpg";
import Img5 from "./img/img-5.jpg";
import Img6 from "./img/img-6.jpg";
import Img7 from "./img/img-7.jpg";
import Img8 from "./img/img-8.jpg";
import Img9 from "./img/img-9.jpg";

const App = () => {
  return (
    <div className="container">
      <h1 className="title">masonry image gallery</h1>
      <div className="image-container">
        <img src={Img1} alt="" />
        <img src={Img2} alt="" />
        <img src={Img3} alt="" />
        <img src={Img4} alt="" />
        <img src={Img5} alt="" />
        <img src={Img6} alt="" />
        <img src={Img7} alt="" />
        <img src={Img8} alt="" />
        <img src={Img9} alt="" />
      </div>
    </div>
  );
};

export default App;
