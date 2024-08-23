import { useEffect, useState } from "react";
import { FOOD_MENU_API_URL } from "./constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  // fetch data
  // useEffect(callback, optional dependency array)
  useEffect(() => {
    console.log("omkar");
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(FOOD_MENU_API_URL + resId);
    const json = await data?.json();
    setResInfo(json?.data);
  };

  return resInfo;
};

export default useRestaurantMenu;
