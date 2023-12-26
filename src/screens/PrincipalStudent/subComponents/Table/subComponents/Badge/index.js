import React from "react";
import "./index.css";

function Badge(prop) {


  return (
    <>
      <div className={"badge "+  prop.color + prop.font_color}>
      <div className={"d-flex align-items-center"}>
        {(prop.item === 'dote') ? <div className={prop.doteColor + " dote"}></div> : ""}
        <span>{prop.count ? prop.count : ""} {prop.name}</span>
      </div>
      </div>
    </>
  );
}

export default Badge;
