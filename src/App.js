import React from "react";
import ReactDOM from "react-dom/client";
// import Header from "./components/Header.js";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";

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
      {/* Whenever there is a change in the path, outlet is getting filled with the component accordingly. */}
      <Outlet />
    </div>
  );
};

// An info that will tell
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        // want to be dynamic path [by giving colon]
        // every restaurant has its unique id: resId
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
