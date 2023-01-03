import React from "react";
import { useState } from "react";
import { logo, twitter, discord, menuIcon } from "../assets";

const menus = [
  {
    name: "about us",
    link: "#about-us",
  },
  {
    name: "yard",
    link: "#yard",
  },
  {
    name: "cats",
    link: "#nfts",
  },
  {
    name: "utilities",
    link: "#utilities",
  },
  {
    name: "team",
    link: "#team",
  },
  {
    name: "roadmap",
    link: "#roadmap",
  },
  {
    name: "faq",
    link: "#faq",
  },
];
const Navbar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <div className="w-[100%] bg-[#666] sm:h-[4rem] h-[3rem] flex items-center border-b-2 gothic border-white sticky top-0 pr-[2.5%] pl-[2.5%] z-50">
      <nav className="w-full m-auto uppercase flex justify-between">
        <div className="sm:block hidden w-[40%] lg:pr-[4%] pr-[1%]">
          <ul className="text-white flex justify-between items-center h-full tracking-[0.4rem] text-[1.2rem] md:text-[1.3rem] shadowed">
            <li className="show-eyes h-full flex items-center">
              <a
                href="#"
                className="show-eyes"
                onClick={(e) => e.preventDefault()}
              >
                connect wallet
              </a>
            </li>
            <li>
              <a
                href="https://yardpaper.gitbook.io/yardpaper/catsyard-dive-in/the-yard-mission"
                target="_blank"
              >
                yardpaper
              </a>
            </li>
          </ul>
        </div>

        <div className="w-[20%] flex items-center justify-center">
          <a href="#">
            <img src={logo} className="w-[120px]" alt="catsyard logo" />
          </a>
        </div>
        <ul className="w-[40%] flex justify-end items-center">
          <li>
            <a href="https://twitter.com/CatsYardNFT" target="_blank">
              <img className="img" src={twitter} alt="twitter icon" />
            </a>
          </li>
          <li>
            <a href="https://discord.gg/vBhmbvSB25" target="_blank">
              <img className="img ml-[20px]" src={discord} alt="discord icon" />
            </a>
          </li>
          <li>
            <img
              src={menuIcon}
              className={`${
                menu && "rotate"
              } w-[2rem] ml-[20px] transition ease-linear `}
              onClick={() => setMenu((prev) => !prev)}
            />
          </li>
        </ul>
      </nav>
      <div
        className={`uppercase text-black absolute right-0 top-[100%] bg-[#fdf9f6] transition-all ease-linear duration-500  overflow-hidden ${
          menu ? "showmen" : "hide"
        }`}
      >
        <ul>
          {menus.map((each) => (
            <li
              className="pr-[2em] pl-[2em] leading-[200%] text-[1.2rem] hover:text-[1.5rem] text-center transition-all ease-out duration-200"
              key={each.name}
              onClick={() => setMenu((prev) => !prev)}
            >
              <a href={each.link}>{each.name}</a>
            </li>
          ))}
        </ul>
      </div>

      {/* {menu && <ShowMenu />} */}
    </div>
  );
};

export default Navbar;
