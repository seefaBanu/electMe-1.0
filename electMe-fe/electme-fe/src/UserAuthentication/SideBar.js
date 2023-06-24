import React from "react";
import "./SideBar.css";
import { MdHowToVote } from "react-icons/md";

const SideBar = () => {
  return (
    <div className="sideBar">
      <div className="sideBar-header">
        <h5>SideBar</h5>
      </div>
      <div className="sideBar-bg">

      <div className="flex sideBar-elements ">
        <div className="sideBar-icon">
          <MdHowToVote />
        </div>
        <div className="sideBar-component">
          <h5>Dasboard</h5>
        </div>
      </div>

      <div className="flex sideBar-elements ">
        <div className="sideBar-icon">
          <MdHowToVote />
        </div>
        <div className="sideBar-component">
          <h5>Elections</h5>
        </div>
      </div>

      <div className="flex sideBar-elements ">
        <div className="sideBar-icon">
          <MdHowToVote />
        </div>
        <div className="sideBar-component">
          <h5>Voters</h5>
        </div>
      </div>

      <div className="flex sideBar-elements ">
        <div className="sideBar-icon">
          <MdHowToVote />
        </div>
        <div className="sideBar-component">
          <h5>Candidates</h5>
        </div>
      </div>

      </div>
    </div>
  );
};

export default SideBar;
