import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react"; // Have to import as a named import.
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";

const Body = () => {
  // State variable - Super powerful variable.(To make such variable we use hooks)
  // Why called state variable -> maintains the state of component.
  // Scope is inside that component.
  // Industry standard: [listOfRestaurants, setListOfRestaurants]
  // React is constantly checking this variable.(react keeps tracking this variable)
  const [listOfRestaurants, setListOfRestaurants] = useState([]); // returns array, destructuring it on the fly.
  const [filteredRestaurants, setFilteredRestaurants] = useState([]); // returns array, destructuring it on the fly.
  const [searchText, setSearchText] = useState(""); // returns array, destructuring it on the fly.

  // Whenever state variables update, react triggers a reconciliation cycle(re-renders the component)
  console.log("Body rendered");

  // hook - useEffect()
  // Called after the rendering of component (as soon as the render cycle finish).
  useEffect(() => {
    fetchData();
  }, []);

  // Logic of fetching data in React is same as in JS.
  const fetchData = async () => {
    const data = await fetch(
      // returns a Promise
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    ); // fetch data from the API (using browsers API fetch
    const json = await data.json();
    setListOfRestaurants(
      // Optional chaining
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    console.log(
      // Not a good way
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return (
      <h1>
        Looks like you're offline!! Please check your internet connection;
      </h1>
    );
  }
  // Conditional Rendering: rendering on the basis of condition
  // if (listOfRestaurants.length == 0) {
  //   return <Shimmer />;
  // }

  // Using ternary operator
  return listOfRestaurants.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          {/* To track the value of the input box, need to bind the value with
          local state variable. */}
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              // Filter the restaurant cards and update the UI.
              // need searchText
              const filteredRes = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurants(filteredRes);
              console.log(searchText);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            // Filter logic here
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating >= 4.4
            );
            setFilteredRestaurants(filteredList);
            console.log(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {/* Restaurant Card */}
        {
          // not using keys (not acceptable) <<<<< index as key <<<<< unique id (best practice recommended)
          filteredRestaurants?.map((restaurant) => (
            <Link
              key={restaurant.info.id}
              to={"/restaurants/" + restaurant.info.id}
            >
              <RestaurantCard resData={restaurant} />
            </Link>
          ))
        }
        {/* <RestaurantCard resName="KFC" cuisine="Burger, Fast Food" /> */}
      </div>
    </div>
  );
};

export default Body;
