import resList from "../../utils/mockData";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
    return (
      <div className="body">
        <div className="search">Search</div>
        <div className="res-container">
          {/* Restaurant Card */}
          {
            // not using keys (not acceptable) <<<<< index as key <<<<< unique id (best practice recommended)
            resList.map(restaurant => <RestaurantCard key={restaurant.info.id} resData={restaurant}/>)
          }
          {/* <RestaurantCard resName="KFC" cuisine="Burger, Fast Food" /> */}
        </div>
      </div>
    );
  };

  export default Body;