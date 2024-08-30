import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  const onlineStatus = useOnlineStatus();
  
  const {LoggedInUser} = useContext(UserContext)

  const cartItems = useSelector((store) => store.cart.items)

  return (
    <div className="flex justify-between bg-orange-100 shadow-lg ">
      <div className="logo">
        <img className="w-24 h-35" src={LOGO_URL} />
      </div>
      <div className="flex item-centre">
        <ul className="flex p-4 mt-5">
          <li className="px-4">
            Online Status: {onlineStatus? "✅" :"🔴"}
          </li>
          <li className="px-4 h-8 hover:bg-orange-200">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4 h-8  hover:bg-orange-200">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4 h-8 hover:bg-orange-200">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4 h-8 hover:bg-orange-200">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4 h-8 hover:bg-orange-200">
          <Link to="/cart">Cart({cartItems.length})</Link>
          </li>
          <button className="px-4 mb-4 rounded-full h-9 bg-orange-200 hover:bg-orange-300"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
          
          <li className="px-4 h-8 hover:bg-orange-200">
            {LoggedInUser}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
