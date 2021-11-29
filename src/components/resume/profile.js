import Cycle from "../../img/cycle.gif";
import {
  FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
const profile = () => {
  return (
      <div className="profile">
        <img src={Cycle} alt="" />
        <h3>samkong kang</h3>
        <p>web designer</p>
        <div className="share">
          <a href="replace" className="iconbox"><FaFacebookF className="icon" /></a>
          <a href="replace" className="iconbox"><FaTwitter className="icon" /></a>
          <a href="replace" className="iconbox"><FaInstagram className="icon" /></a>
          <a href="replace" className="iconbox"><FaLinkedin className="icon" /></a>
        </div>
        <div className="buttons">
          <a href="replace" className="btn"> download cv </a>
          <a href="replace" className="btn"> hire me </a>
        </div>
      </div>
  );
};

export default profile;