import React from "react";
import "../App.css";
import Search from "./Search";

const Election = () => {
  return (
    <div className="my-content">
      <div className="my-content-header">Election</div>

      <div className="my-content-content">
        <div className="add-button">Add Election </div>
        <div><Search/> </div>
      </div>
      <div className="my-content-content">
        <div className="cardi">
            </div>
      </div>

    </div>
  );
};

export default Election;
