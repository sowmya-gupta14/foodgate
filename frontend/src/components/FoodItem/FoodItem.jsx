import React, { useContext } from 'react'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext';

const FoodItem = ({id,name,price,description,image}) => {
   
    const {carditem, addToCart, removeFromCart}= useContext(StoreContext);

  return (
    <div className='food-item w-full m-auto rounded-2xl shadow-md shadow-zinc-600 animate-[fadeIn_1s]'>
        <div className="food-item-img-container relative">
            <img className='w-full rounded-tr-2xl rounded-tl-2xl rounded-bl-none rounded-br-none ' src={image} alt="" />
            {!carditem[id]
               ?<img className='add w-9 absolute bottom-4 right-4 cursor-pointer rounded-full' 
               onClick={()=>addToCart(id)} src={assets.add_icon_white} ></img>
               :<div className='food-item-counter absolute bottom-4 right-4 flex items-center gap-2 p-[6px] rounded-full bg-white'>
                  <img className='w-7' onClick={() => removeFromCart(id)} src={assets.remove_icon_red} alt="" />
                  <p>{carditem[id]}</p>
                  <img className='w-7' onClick={() => addToCart(id)} src={assets.add_icon_green} alt="" />
               </div>
            }
        </div>

        <div className="food-item-info p-5">
            <div className="rating flex justify-between items-center">
                <p className='text-xl font-medium'>{name}</p>
                <img className='w-16' src={assets.rating_starts} alt="" />
            </div>
            <p className='text-zinc-600 text-xs'>{description}</p>
            <p className='text-red-500 text-xl font-medium my-4 '>${price}</p>
        </div>
    </div>
  )
}

export default FoodItem