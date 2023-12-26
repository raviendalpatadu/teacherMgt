import React from "react";
import "./index.css";
import profileImg from "./../../../../../../assets/images/avatar1.png";


function TableCellAvatar(prop) {
  return (
    <>
      <div className="d-flex me-4">
        {/* image */}
        <div className="profile_img flex-column align-self-center">
          <img src={profileImg} alt="profile" />
        </div>
        {/* text */}
        <div className="  flex-column">
          <div className="fw-medium name">{prop.name}</div>
          <div className="fw-light handle">{prop.handle}</div>
        </div>
      </div>
    </>
  );
}

export default TableCellAvatar;
