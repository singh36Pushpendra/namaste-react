import { useState } from "react";
import { LOGO_URL } from "../../utils/constants";

const Header = () => {
  // btnNameReact create a new instance everytime when setBtnNameReact() called.
  const [btnNameReact, setBtnNameReact] = useState("Login");
  console.log("header render");
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Name</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              setBtnNameReact(btnNameReact == "Login" ? "Logout" : "Login");
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};
//   use export to import.
export default Header;
