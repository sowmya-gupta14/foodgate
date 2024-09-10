import React from 'react'
import { assets } from '../../assets/assets'
import '../Sidebar/Sidebar.css'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='sidebar w-[18%] min-h-screen border border-solid border-zinc-300 border-t-0 text-xs'>
        <div className="sidebar-options pt-12 pl-[20%] flex flex-col gap-5">
            <NavLink to='/add' className='flex items-center gap-3 border border-zinc-300 py-2 px-3 cursor-pointer rounded-tl-sm rounded-bl-sm border-r-0'>
                <img src={assets.add_icon} alt="" />
                <p>Add items</p>
            </NavLink>

            <NavLink to='/list' className='flex items-center gap-3 border border-zinc-300 py-2 px-3 cursor-pointer rounded-tl-sm rounded-bl-sm border-r-0'>
                <img src={assets.order_icon} alt="" />
                <p>List items</p>
            </NavLink>

            <NavLink to='/orders' className='flex items-center gap-3 border border-zinc-300 py-2 px-3 cursor-pointer rounded-tl-sm rounded-bl-sm border-r-0'>
                <img src={assets.order_icon} alt="" />
                <p>Orders</p>
            </NavLink>
        </div>
    </div>
  )
}

export default Sidebar