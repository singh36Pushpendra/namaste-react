import { useEffect, useState } from "react";
import { LOGO_URL } from "../../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  // btnNameReact create a new instance everytime when setBtnNameReact() called.
  const [btnNameReact, setBtnNameReact] = useState("Login");
  console.log("header render");

  // if no dependency array => useEffect is called on every render!
  // if the dependency array is empty => useEffect is called on initial render and just once
  // if dependency array is [btnNameReact] => Called everytime btnNameReact is updated.
  useEffect(() => {
    console.log("useEffect called");
  }, [btnNameReact]);
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            {/* Browser will not reload when using Link */}
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
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
