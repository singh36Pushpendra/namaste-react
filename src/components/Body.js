import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react"; // Have to import as a named import.
import Shimmer from "./Shimmer";

const Body = () => {
  // State variable - Super powerful variable.(To make such variable we use hooks)
  // Why called state variable -> maintains the state of component.
  // Scope is inside that component.
  // Industry standard: [listOfRestaurants, setListOfRestaurants]
  // React is constantly checking this variable.(react keeps tracking this variable)
  const [listOfRestaurants, setListOfRestaurants] = useState([]); // returns array, destructuring it on the fly.

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
    console.log(
      // Not a good way
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
  };

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
        <button
          className="filter-btn"
          onClick={() => {
            // Filter logic here
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating >= 4.4
            );
            setListOfRestaurants(filteredList);
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
          listOfRestaurants?.map((restaurant) => (
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          ))
        }
        {/* <RestaurantCard resName="KFC" cuisine="Burger, Fast Food" /> */}
      </div>
    </div>
  );
};

export default Body;
