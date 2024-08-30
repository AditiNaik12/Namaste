import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const { resData } = props;
    console.log(resData.info)
  
    const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
      resData?.info;
  
    const { deliveryTime } = resData?.info.sla;
  
    return (
      <div className="w-[300px] p-3 ml-20 mt-10 mb-5 rounded-lg bg-orange-100 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-orange-300" >
        <img
          className="rounded-lg object-cover h-[200px] w-[100%]"
          alt="res-logo"
          src={CDN_URL +
            cloudinaryImageId
          }
        />
        <h1 className=" text-lg font-bold">{name}</h1>
        <h5 className="text-sm">⭐{avgRating} . {deliveryTime}mins . {costForTwo}</h5>
        <h5 className="text-sm">{cuisines.join(", ")}</h5>
      </div>
    );
  };

  export default RestaurantCard;