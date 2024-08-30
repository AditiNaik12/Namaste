import React from "react";
import ItemList from "./ItemList";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="p-4 m-4 text-center">
      <h1 className="font-bold text-2xl">Cart</h1>
      <button
        className="bg-orange-400 rounded-lg p-2"
        onClick={handleClearCart}
      >
        Clear Cart
      </button>
      <div className="w-9/12 m-5 ml-40 text-left flex justify-between">
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
