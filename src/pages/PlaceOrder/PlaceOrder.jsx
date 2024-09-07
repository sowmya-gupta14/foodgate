import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import '../PlaceOrder/PlaceOrder.css'

const PlaceOrder = () => {
  
  const {getTotalAmount} = useContext(StoreContext); 


  return (
    <form action="" className="place-order flex items-start justify-between gap-36 mt-24">
      <div className="place-order-left w-full">
        <p className="title text-3xl font-semibold mb-12">Delivery information</p>
        <div className="multifields flex gap-2">
          <input type="text" placeholder="First name" />
          <input type="text" placeholder="Last name" />
        </div>
        <input type="email" placeholder="Email" />
        <input type="text" placeholder="Street" />
        <div className="multifields flex gap-2">
          <input type="text" placeholder="City" />
          <input type="text" placeholder="State" />
        </div>
        <div className="multifields flex gap-2">
          <input type="text" placeholder="Zip code" />
          <input type="text" placeholder="Country" />
        </div>
        <input type="text" placeholder="Contact" />
      </div>

      <div className="place-order-right w-full">
        <div className="cart-total flex-1 flex flex-col gap-5 mt-7">
          <h2 className="text-2xl">Cart Totals</h2>
          <div>
            <div className="cart-total-details flex justify-between text-zinc-600">
              <p>Subtotal</p>
              <p>${getTotalAmount()}</p>
            </div>
            <hr className="my-2" />
            <div className="cart-total-details flex justify-between text-zinc-600">
              <p>Delivery fee</p>
              <p>${getTotalAmount()===0?0:2}</p>
            </div>
            <hr className="my-2" />
            <div className="cart-total-details flex justify-between text-zinc-900 mb-2">
              <p>Total</p>
              <p>${getTotalAmount()===0?0:getTotalAmount()+2}</p>
            </div>
          </div>

          <button className="text-white mt-7 bg-red-500 w-56 py-3 rounded cursor-pointer">PROCEED TO PAYMENT</button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
