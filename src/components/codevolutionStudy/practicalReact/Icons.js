import React from "react";
import { IconContext } from "react-icons";
import { FaReact } from "react-icons/fa";
import { MdAlarm } from "react-icons/md";

const Icons = () => {
  return (
    <IconContext.Provider value={{ color: "blue", size: "5rem" }}>
      <FaReact />
      <MdAlarm />
    </IconContext.Provider>
  );
};

export default Icons;
