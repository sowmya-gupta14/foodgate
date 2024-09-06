import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import '../Cart/Cart.css'

const Cart = () => {
  const { carditem, food_list, removeFromCart ,getTotalAmount} = useContext(StoreContext);

  return (
    <div className="cart mt-24">
      <div className="cart-items ">
        <div className="cart-items-title grid grid-cols-6 items-center text-zinc-600 text-sm">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>

        <br />
        <hr />
        {food_list.map((item, index) => {
          if (carditem[item._id] > 0) {
            return (
              <div>
                <div className="cart-item my-2 text-black grid grid-cols-6 items-center text-xs">
                  <img className="w-12" src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{carditem[item._id]}</p>
                  <p>${item.price * carditem[item._id]}</p>
                  <p
                    onClick={() => removeFromCart(item._id)}
                    className="cursor-pointer"
                  >
                    x
                  </p>
                </div>
                <hr className="h-[1px] text-zinc-800" />
              </div>
            );
          }
        })}
      </div>

      <div className="cart-bottom mt-20 flex justify-between gap-52">
        <div className="cart-total flex-1 flex flex-col gap-5">
          <h2 className="text-2xl">Cart Totals</h2>
          <div>
            <div className="cart-total-details flex justify-between text-zinc-600">
              <p>Subtotal</p>
              <p>${getTotalAmount()}</p>
            </div>
            <hr className="my-2"/>
            <div className="cart-total-details flex justify-between text-zinc-600">
              <p>Delivery fee</p>
              <p>${2}</p>
            </div>
            <hr className="my-2" />
            <div className="cart-total-details flex justify-between text-zinc-900 mb-2">
              <p>Total</p>
              <p>${getTotalAmount()+2}</p>
            </div>
          </div>

          <button className="text-white bg-red-500 w-56 py-3 rounded cursor-pointer">PROCEED TO CHECKOUT</button>
        </div>

        <div className="promo-code flex-1">
          <div>
            <p className="text-zinc-600 ">If you have promocode, Enter it here</p>
            <div className="promocode-input mt-2 flex justify-between items-center bg-orange-100 rounded ">
              <input className="bg-transparent pl-2" type="text" placeholder="promocode" />
              <button className="w-36 py-3 px-1 bg-black text-white rounded">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
