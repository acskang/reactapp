import React from "react";
import { BiSearchAlt } from "react-icons/bi";
import { FaBell, FaChevronDown } from "react-icons/fa";
import Women from "../img/cycle.jpg";

function TopContainer() {
  return (
    <div className="topContainer">
      <div className="inputBox">
        <input type="text" placeholder="Search item, collections" />
        <i>
          <BiSearchAlt />
        </i>
      </div>
      <div className="profileContainer">
        <i className="profileIcon">
          <FaBell />
        </i>
        <div className="profileImage">
          <img src={Women} alt="" />
        </div>
        <p className="profileName">Olivia Christine</p>
        <i className="menuChevron" id="menuChevron">
          <FaChevronDown />
        </i>
        <div className="menuContainer" id="menuContainer">
          <ul>
            <li>Web Design</li>
            <li>UI / UX</li>
            <li>Form Design</li>
            <li>UI Design</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TopContainer;
