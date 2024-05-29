import React from "react";
import "./Header.scss";
const Header = () => {
  return (
    <div className="header">
      <div className="parent">
        <div className="left">
          <h1>MORENT</h1>
        </div>
        <div className="center">
          <div className="search-bar">
            <img src="./search-normal.png" alt="" />
            <input type="text" placeholder="Search Something here..." />
            <img src="./filter.png" alt="" />
          </div>
        </div>
        <div className="right">
          <div className="favorite">
            <img src="./heart.png" alt="" />
          </div>
          <div className="notification">
            <div className="dot"></div>
            <img src="./notification.png" alt="" />
          </div>
          <div className="setting">
            <img src="./setting.png" alt="" />
          </div>
          <div className="profile">
            <img src="./profile.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
