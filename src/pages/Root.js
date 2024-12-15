import React from "react";
import { Outlet } from "react-router-dom";
import MainNavigation from "../components/submitForm/MainNavigation";
import LeftTab from "../components/LeftTab";
import "./Root.scss";
const Root = () => {
  return (
    <>
      <MainNavigation />
      <div className="outer-outlet">
        <div className="container-two">
          <div className="wrap">
            <div className="left-root">
              <LeftTab />
            </div>
            <div className="right-root">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Root;
