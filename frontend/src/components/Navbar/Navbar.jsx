import React, { useContext, useState } from 'react'
import { assets } from '../../assets/assets'
import '../Navbar/Navbar.css'
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

const Navbar = ({setShowLogin}) => {
    const [menu, setMenu] = useState("home");
    const {getTotalAmount}= useContext(StoreContext);

  return (
    <div className='navbar py-5 flex justify-between items-center'>
        <Link to='/'><img src={assets.logo} className='w-36' alt="" /></Link>

        <ul className='navbar-menu flex list-none gap-5 text-zinc-600 text-base'>
            <Link to='/' onClick={()=> setMenu("home")} className={menu=="home"?"active":""}>Home</Link>
            <a href='#explore-menu' onClick={()=> setMenu("menu")} className={menu=="menu"?"active":""}>Menu</a>
            <a href='#app-download' onClick={()=> setMenu("mobile-app")} className={menu=="mobile-app"?"active":""}>Mobile-app</a>
            <a href='#footer' onClick={()=> setMenu("contact-us")} className={menu=="contact-us"?"active":""}>Contact us</a>
        </ul>

        <div className='navbar-right flex items-center gap-10'>
            <img src={assets.search_icon} alt="" />
            <div className='navbar-search-icon relative'>
               <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link> 
                <div className={`${getTotalAmount()===0?" ":"absolute min-w-2 min-h-2 bg-red-600 rounded-full -top-1 -right-2"} `}></div>
            </div>

            <button onClick={()=> setShowLogin(true)} className='bg-transparent font-base text-zinc-600 border border-red-500 py-2 p-7 rounded-full cursor-pointer hover:bg-red-100 duration-300'>Sign in</button>
        </div>


    </div>
  )
}

export default Navbar