import resList from "../../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react"; // Have to import as a named import.

const Body = () => {
  // State variable - Super powerful variable.(To make such variable we use hooks)
  // Why called state variable -> maintains the state of component.
  // Scope is inside that component.
  // Industry standard: [listOfRestaurants, setListOfRestaurants]
  // React is constantly checking this variable.(react keeps tracking this variable)
  const [listOfRestaurants, setListOfRestaurants] = useState(resList); // returns array, destructuring it on the fly.

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            // Filter logic here
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating >= 4.3
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
          listOfRestaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          ))
        }
        {/* <RestaurantCard resName="KFC" cuisine="Burger, Fast Food" /> */}
      </div>
    </div>
  );
};

export default Body;
