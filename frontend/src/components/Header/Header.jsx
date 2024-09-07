import React from 'react'
//import '../Header/Header.css'

const Header = () => {
  return (
    <div className="header h-[34vw] my-7 mx-auto bg-[url('/header_img.png')] bg-contain bg-no-repeat relative ">
        <div className="header-contents absolute flex flex-col items-start gap-[1.5vw] max-w-1/2  bottom-[10%] left-[6vw] animate-[fadeIn_3s]">
            <h2 className='font-medium w-2/3 lg:max-w-96 text-white text-2xl sm:text-4xl lg:text-7xl'>Order your favourite food here</h2>
            <p className='text-white text-xl hidden lg:block'>Choose from a diverse menu featuring a delactable array of dishes crafted with the finest ingredients and culinary experience. Our mission is to satisfy your cravings and elevate your dining experience , one delicious meal at a time </p>
            <button className='font-medium py-3 px-10 bg-white text-zinc-500 text-md rounded-full '>View menu</button>
        </div>
    </div>
  )
}

export default Header