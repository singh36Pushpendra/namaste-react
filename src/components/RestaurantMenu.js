import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API_URL } from "../../utils/constants";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();

  // useEffect(callback, optional dependency array)
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API_URL + resId);
    const json = await data.json();
    console.log(json);
    setResInfo(json?.data);
  };
  console.log(resInfo?.cards[2]?.card?.card?.info);
  const resInformation = resInfo?.cards[2]?.card?.card?.info;
  const itemCards =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
      ?.itemCards;
  console.log(
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
  );
  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <h1>{resInformation?.name}</h1>
      <h3>{resInformation?.cuisines.join(", ")}</h3>
      <h3>{}</h3>
      <h3>{resInformation?.costForTwoMessage}</h3>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item?.card?.info?.id}>
            {item?.card?.info?.name} - Rs.{" "}
            {item?.card?.info?.price || item?.card?.info?.defaultPrice}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default RestaurantMenu;
