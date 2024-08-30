import React, { useState } from "react";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  const [showIndex, setShowIndex] = useState(null)

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  // console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.map((c) => (
  //   c.card?.["card"]?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.MenuCarousel" || "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" || "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
  // )))

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.["card"]?.["@type"] !==
          "type.googleapis.com/swiggy.presentation.food.v2.RestaurantAddress" &&
        c.card?.["card"]?.["@type"] !==
          "type.googleapis.com/swiggy.presentation.food.v2.RestaurantLicenseInfo" &&
        c.card?.["card"]?.["@type"] !==
          "type.googleapis.com/swiggy.presentation.food.v2.MenuVegFilterAndBadge" &&
        c.card?.["card"]?.["@type"] !==
          "type.googleapis.com/swiggy.presentation.food.v2.MenuCarousel"
    );

  // console.log(categories)

  return (
    <div>
      <h1 className="text-center font-bold text-3xl my-6">{name}</h1>
      <p className="text-center font-bold text-lg">
        {cuisines.join(",")} - {costForTwoMessage}
      </p>
      <ul>
        {categories.map((category, index) => (
          <RestaurantCategory
            key={category.card.card.title}
            data={category?.card?.card}
            showItems = {index === showIndex ? true : false} 
            setShowItems={() => setShowIndex(index)}
          />
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
