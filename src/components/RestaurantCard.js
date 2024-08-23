import { FOOD_CDN_URL } from "../../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const {
    name,
    cuisines,
    costForTwo,
    cloudinaryImageId,
    avgRating,
    sla: { deliveryTime },
  } = resData.info;
  return (
    <div // if no class for certain hard coded value then use square bracked [].
      className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200"
    >
      <img
        className="rounded-lg"
        src={FOOD_CDN_URL + cloudinaryImageId}
        alt="res-logo"
      />
      <h3 className="font-bold py-4 text-xl">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  );
};

// Higher order component
// input - RestaurantCard => RestaurantCardPromoted
export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    // new component we are returning, will be having promoted label on top of it.
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">
          Promoted
        </label>
        {/* spread operator '...' */}
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
