import React from 'react'
import { assets } from '../../assets/assets'

const Navbar = () => {
  return (
    <div className='navbar flex justify-between items-center py-2 px-[4%]'>
        <img src={assets.logo} alt="" className='logo w-36 ' />
        <img src={assets.profile_image} alt="" className='profile w-14' />
    </div>
  )
}

export default Navbar