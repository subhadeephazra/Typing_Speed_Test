import React from "react";
import keyboardicon from "../Images/keyboardIcon.png";
import usericon from "../Images/user.png";

const Header = () => {
  return (
    <div className="header">
      <div className="left-content">
        <h1 className="logo">TypeCat</h1>
        <img src={keyboardicon} alt="keyboardicon" />
      </div>
      <div className="right-content">
        <img src={usericon} alt="usericon" />
      </div>
    </div>
  );
};

export default Header;
