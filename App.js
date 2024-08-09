import React from "react";
import ReactDOM from "react-dom/client";

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

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="data:image/png;base64,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"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Name</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

// Inline style is not a prefered way.
// We should give style as a js object.
const styleCard = {
  backgroundColor: "#f0f0f0",
};

const RestaurantCard = () => {
  return (
    <div
      className="res-card"
      style={{
        backgroundColor: "#f0f0f0",
      }}
    >
      <img
        className="res-logo"
        src="data:image/jpeg;base64,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"
        alt="res-logo"
      />
      <h3>Meghana Foods</h3>
      <h4>Biryani, North Indian, Asian</h4>
      <h4>4.4 stars</h4>
      <h4>38 minutes</h4>
    </div>
  );
};
const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {/* Restaurant Card */}
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
      </div>
    </div>
  );
};
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
