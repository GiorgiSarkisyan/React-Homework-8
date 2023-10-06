import React from "react";

function Box({ name, age, img }) {
  return (
    <li className="box">
      <div className="box-text">
        <div className="box-text-name">{name}</div>
        <div className="box-text-age">{age}</div>
      </div>
      <div className="box-image">
        <img src={img} alt="image" />
      </div>
    </li>
  );
}

export default Box;
