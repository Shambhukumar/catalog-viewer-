import React from "react";
import "./footer.scss";
//
const Footer = () => {
  return (
    <div className="Footer">
      <div className="Footer__text">
        <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris
        </span>
        <div className="Footer__copyright">
          <span>
            Copyright &copy; 2020 catalog viewer Inc. All Right Reserved
          </span>
        </div>
      </div>

      <ul className="Footer__link">
        <li className="Footer__link--link">Linkdin</li>
        <li className="Footer__link--face">Facebook</li>
        <li className="Footer__link--insta">Instagram</li>
      </ul>
    </div>
  );
};

export default Footer;
