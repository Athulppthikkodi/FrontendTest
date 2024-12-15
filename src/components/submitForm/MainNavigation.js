import React from "react";
import hamberger from '../../assets/hamberger_Icon.png';
import starIcon from '../../assets/start_Icon.png';
import opIcon from '../../assets/op_icon.png';
import './MainNavigation.scss'
const MainNavigation = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="wrap">
          <div className="left-section">
            <div><img src={hamberger} alt="icon" /></div>
            <h1>Typography</h1>
          </div>
          <div className="right-section">
            <div className="icon">
            <img src={starIcon} alt="icon" />
            </div>
            <div className="icon">
            <img src={opIcon} alt="icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainNavigation;
