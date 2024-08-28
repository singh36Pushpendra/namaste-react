import { useEffect, useState, useContext } from "react";
import { LOGO_URL } from "../../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
import UserContext from "../../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  // btnNameReact create a new instance everytime when setBtnNameReact() called.
  const [btnNameReact, setBtnNameReact] = useState("Login");

  const onlineStatus = useOnlineStatus();
  // console.log("header render");

  const { loggedInUser } = useContext(UserContext);
  console.log(loggedInUser);

  // Subscribing to the store using a selector.
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  // if no dependency array => useEffect is called on every render!
  // if the dependency array is empty => useEffect is called on initial render and just once
  // if dependency array is [btnNameReact] => Called everytime btnNameReact is updated.
  useEffect(() => {
    console.log("useEffect called");
  }, [btnNameReact]);
  return (
    <div className="flex justify-between bg-pink-100 shadow-lg px-10 sm:bg-yellow-50 xl:bg-green-50">
      <div className="logo-container">
        <img className="w-56" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">Online Status: {onlineStatus ? "✅" : "🔴"}</li>
          <li className="px-4">
            {/* Browser will not reload when using Link */}
            {/* Wrapper over the anchor tag. */}
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4 font-bold text-xl">
            <Link to="/cart">Cart - ({cartItems.length} items)</Link>
          </li>
          <button
            className="login"
            onClick={() => {
              setBtnNameReact(btnNameReact == "Login" ? "Logout" : "Login");
            }}
          >
            {btnNameReact}
          </button>
          <li className="px-4 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};
//   use export to import.
export default Header;
