import React, { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'

const FoodDisplay = ({category}) => {
    const {food_list} = useContext(StoreContext)
  return (
    <div className='food-display mt-7' id='food-display'>
        <h2 className='text-xl font-semibold'>Top dishes near you</h2>
        <div className="food-display-list grid grid-cols-[repeat(auto-fill,minmax(240px,_1fr))] mt-7 gap-7 gap-y-12">
            {food_list.map((item, index)=>{
                if(category==="All" || category===item.category){
                    return <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image} />

                }
                


            })}
        </div>

    </div>
  )
}

export default FoodDisplay