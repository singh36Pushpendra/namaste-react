import React, { lazy, Suspense, useEffect, useState } from "react"; // Suspense is a component which comes from React.
import ReactDOM from "react-dom/client";
// import Header from "./components/Header.js";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "../utils/UserContext";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";
import Cart from "./components/Cart";

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

// lazy loading or Chunking or Code Splitting or dynamic bundling, import
// or on demand loading
// below import is not above what we declared
// even it is a function, it will take the
// path of grocery component.
// using lazy function we are importing, no need above declaration
const Grocery = lazy(() => import("./components/Grocery"));

// for about us also
const About = lazy(() => import("./components/About"));

const AppLayout = () => {
  const [userName, setUserName] = useState();

  // authentication
  useEffect(() => {
    // Make an API call and need username and password.
    const data = {
      name: "Pushpendra Singh",
    };
    setUserName(data.name);
  }, []);

  return (
    // Providing to whole app.
    // Overriding the default value of context(UserContext)
    // Put in setUserName to modify itself.
    // Just like context provider we have a redux app store provider.
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <div className="app">
          <Header />
          {/* Whenever there is a change in the path, outlet is getting filled with the component accordingly. */}
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
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
        element: (
          <Suspense fallback={<h1>About Loading...</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        // We can pass fallback as jsx or shimmer ui or loading screen
        // while lazy loading.
        element: (
          <Suspense fallback={<h1>Loading Grocery...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        // want to be dynamic path [by giving colon]
        // every restaurant has its unique id: resId
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
