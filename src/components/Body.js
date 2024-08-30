import RestaurantCard from "./RestaurantCard";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [resList, setResList] = useState([]);
  const [filteredText, setFilteredText] = useState([]);

  const [searchText, setSearchText] = useState("");

  const {LoggedInUser , setUserName} = useContext(UserContext)

  console.log(resList)

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5378802&lng=73.80482429999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    console.log(json);
    setResList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredText(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return (
      <h1>Looks like you are offline.Please check your intrenet connection!</h1>
    );
  }

  return resList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex justify-between">
        <div className="ml-5">
          <input
            type="text"
            className="rounded-md border border-orange-300 outline-orange-300 shadow-lg mt-5 w-[200px] h-8 p-2"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button className="rounded-md bg-orange-300 w-20 h-8"
            onClick={() => {
              console.log(searchText);
              const filteredText = resList.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredText(filteredText);
            }}
          >
            Search
          </button>
        </div>
        <div><label>UserName: </label>
        <input className="p-2 h-8 mt-5 border border-orange-400 rounded-lg" onChange={(e) => setUserName(e.target.value)} value={LoggedInUser}/></div>
        <button
          className="mr-4 bg-orange-300 w-60 h-[30px] text-sm mt-5 rounded-full hover:bg-orange-200"
          onClick={() => {
            const filteredList = resList.filter(
              (res) => res.info.avgRating > 4
            );
            setResList(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      {/* <div className="search">Search</div> */}
      <div className="flex flex-wrap ">
        {filteredText.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurant/" + restaurant.info.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
