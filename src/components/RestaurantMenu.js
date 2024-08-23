import { useState } from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const { resId } = useParams();
  console.log(useParams());
  const resInfo = useRestaurantMenu(resId);

  // lifting the state up.
  const [showIndex, setShowIndex] = useState(null);

  console.log(resInfo);
  const resInformation = resInfo?.cards[2]?.card?.card?.info;
  const itemCards =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
      ?.itemCards;
  console.log(resInformation);
  console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) => {
        console.log(c);
        console.log(c?.card?.card?.["@type"]);
        return (
          c?.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
        );
      }
    );
  if (resInfo === null) return <Shimmer />;
  const { name, cuisines, costForTwoMessage } = resInformation;

  console.log(categories);
  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      {/* categories accordians */}
      {console.log(categories)}
      {categories.map((category, index) => (
        // controlled component
        <RestaurantCategory
          key={category?.card?.card?.title}
          data={category?.card?.card}
          showItems={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)}
        />
      ))}

      {/* <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item?.card?.info?.id}>
            {item?.card?.info?.name} - Rs.{" "}
            {item?.card?.info?.price || item?.card?.info?.defaultPrice}
          </li>
        ))}
      </ul> */}
    </div>
  );
};
export default RestaurantMenu;
