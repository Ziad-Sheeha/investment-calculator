import React from "react";
import moneyLogo from "../assets/pngwing.com (3).png";

const Header = () => {
      return (
            <header id="header">
                  <img src={moneyLogo} alt="some dollars" />
                  <h1>Investment Calculator</h1>
            </header>
      );
};

export default Header;
