import React from "react";
import "./header.scss";

const header = () => {
  return (
    <div className="Header">
      <div className="Header__logo">Catalog Viewer</div>

      <ul className="Header__link">
        <li>Home</li>
        <li>About Us</li>
        <li>Site map</li>
        <li>Contact Us</li>
      </ul>
    </div>
  );
};
export default header;
