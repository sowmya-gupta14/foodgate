import React from 'react'
import { menu_list } from '../../assets/assets'
import './Exploremenu.css'

const ExploreMenu = ({category, setCategory}) => {
  return (
    <div className='explore-menu flex flex-col gap-5' id='explore-menu'>
        <h1 className='font-medium text-zinc-600 text-3xl'>Explore our menu</h1>
        <p className='max-w-2/3 columns-[#808080]'>Choose from a diverse menu featuring a delactable array of dishes crafted with the finest ingredients and culinary experience. Our mission is to satisfy your cravings and elevate your dining experience , one delicious meal at a time</p>

        <div className="explore-menu-list flex justify-between items-center gap-7 text-center my-5 overflow-x-scroll">
            {menu_list.map((item,index)=>{
                return(
                    <div onClick={()=> setCategory(prev => prev===item.menu_name?"All":item.menu_name)} key={index}>
                        <img src={item.menu_image} className={`${category === item.menu_name ? "active" : ""} w-[7.5vw] min-w-20 cursor-pointer rounded-full duration-[0.2s]`} alt="" />
                        <p className='mt-2 text-zinc-600 text-base cursor-pointer'>{item.menu_name}</p>
                    </div>
                )
            })}
        </div>

        <hr className='my-1 h-[2px] bg-zinc-300 ' />
    </div>
  )
}

export default ExploreMenu