import React from "react";
import "./DashBoard.css";
import { MdHowToVote } from "react-icons/md";
import '../App.css'

export const DashBoard = () => {
  return (
    <div className="my-content">
      <div className="my-content-header">Dashboard</div>
      <div className="my-content-content">

        <div className="cardi">
         <div className="cardi-left">
          <div className="cardi-name">Elections</div>
          <div className="cardi-count">10</div>
          </div>

          <div className="cardi-right">
            <MdHowToVote />
          </div>
        </div>

        <div className="cardi">
         <div className="cardi-left">
          <div className="cardi-name">Elections</div>
          <div className="cardi-count">10</div>
          </div>

          <div className="cardi-right">
            <MdHowToVote />
          </div>
        </div>

        <div className="cardi">
         <div className="cardi-left">
          <div className="cardi-name">Elections</div>
          <div className="cardi-count">10</div>
          </div>

          <div className="cardi-right">
            <MdHowToVote />
          </div>
        </div>


      </div>
    </div>
  );
};
