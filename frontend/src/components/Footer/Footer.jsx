import React from "react";
import { assets } from "../../assets/assets";
import '../Footer/Footer.css'

const Footer = () => {
  return (
    <div className="footer text-white bg-zinc-600 flex flex-col items-center gap-5 py-4 px-[8vw] pt-20 mt-24" id="footer">
      <div className="footer-content w-full flex justify-between ">
        <div className="footer-left w-1/3 flex  flex-col items-start gap-5">
          <img src={assets.logo} alt="" />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi,
            illo quo? Sunt, illum. Nisi dolorem, at similique illo eveniet animi
            veniam maiores omnis, exercitationem, quam alias velit? Deleniti,
            voluptatum omnis?
          </p>
          <div className="social-icons flex">
            <img className="w-10 mr-3" src={assets.facebook_icon} alt="" />
            <img className="w-10 mr-3" src={assets.twitter_icon} alt="" />
            <img className="w-10 mr-3" src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-center flex flex-col items-start gap-4 ">
            <h2 className="text-xl font-semibold">COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div className="footer-right flex flex-col items-start gap-4">
            <h2 className="text-xl font-semibold">GET IN TOUCH</h2>
            <ul>
                <li>+91 1234556789</li>
                <li>contact@tomato.com</li>
            </ul>
        </div>
      </div>
      <hr className="w-full h-[2px] mt-4 bg-zinc-600" />
      <p className="footer-copyright sm:text-center">Copyright 2024 Tomato.com - All Rights Reserved.</p>
    </div>
  );
};

export default Footer;
