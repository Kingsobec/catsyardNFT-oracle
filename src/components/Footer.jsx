import React from "react";
import { logo, twitterblue, discordblue } from "../assets";
import Button from "./Button";

const Footer = () => {
  return (
    <footer className="p-[3%] gothic">
      <div className="flex sm:flex-row flex-col-reverse justify-between items-center pb-[2%] border-b-2 border-[#0000001a]">
        <div className="flex justify-between w-full items-center md:justify-left">
          <img src={logo} alt="catsyarNFT log" className="h-[40px]" />
          <div className="sm:hidden">
            <Button />
          </div>
        </div>
        <div className="flex justify-between mb-3 md:mb-0">
          <a href="https://twitter.com/CatsYardNFT" target="_blank">
            <img
              src={twitterblue}
              alt="twitter icon"
              className="h-[45px] ml-[10px]"
            />
          </a>
          <a href="https://twitter.com/CatsYardNFT" target="_blank">
            <img
              src={discordblue}
              alt="discord icon"
              className="h-[45px] ml-[20px]"
            />
          </a>
        </div>
      </div>

      <div className="flex justify-between pt-[3%]">
        <p>Copyright © 2022. Made by Catsyard.</p>
        <a href="#" onClick={(e) => e.preventDefault()}>
          TEAM@CATSYARD.XYZ
        </a>
      </div>
    </footer>
  );
};

export default Footer;
