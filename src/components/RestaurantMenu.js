import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  // useEffect(callback, optional dependency array)
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.96340&lng=77.58550&restaurantId=1452&catalog_qa=undefined&submitAction=ENTER"
    );
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
        {console.log(itemCards[0])}
        <li>{itemCards[0]?.card?.info?.name}</li>
        <li>Burgers</li>
        <li>Diet Coke</li>
      </ul>
    </div>
  );
};
export default RestaurantMenu;
