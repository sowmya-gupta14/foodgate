import React from 'react'
import { assets } from '../../assets/assets'

const AppDownload = () => {
  return (
    <div className='app-download m-auto mt-24 text-2xl text-center font-medium' id='app-download'>
        <p className='text'>For better experience Download <br /> Tomato App</p>
        <div className="platforms flex justify-center gap-4 mt-10">
            <img className='max-w-44 duration-[0.5s] cursor-pointer hover:scale-105' src={assets.play_store} alt="" />
            <img className='max-w-44 duration-[0.5s] cursor-pointer hover:scale-105' src={assets.app_store} alt="" />
        </div>
    </div>
  )
}

export default AppDownload