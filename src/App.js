import React from "react";
import ReactDOM from "react-dom/client";
// import Header from "./components/Header.js";
import Header from "./components/Header";
import Body from "./components/Body";

/**
 * Header
 *  - Logo
 *  - Nav Items ->
 * Body
 *  - Search
 *  - RestaurantContainer
 *    - RestaurantCard
 *      - image
 *      - Name of res, star rating, cuisine, delivery time etc...
 * Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact
 */


// Inline style is not a prefered way.
// We should give style as a js object.
const styleCard = {
  backgroundColor: "#f0f0f0",
};


// How restaurant data come?
// Come in form of json.

// top level component
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
