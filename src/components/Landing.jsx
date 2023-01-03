import React from "react";
import styles from "../style";
import { xAbout, arrowRight, vector, arrowDown } from "../assets";

const Landing = () => {
  return (
    <section
      className={`bg-[url(./assets/background-pic.webp)] min-h-screen 3xl:min-h-full flex flex-col justify-center bg-no-repeat bg-center bg-cover pt-[5%] pb-[10%] relative ${styles.paddingX}`}
      id="about-us"
    >
      <div
        className={`gothic text-[2.5rem] md:text-[5rem] max-w-[1000px] -sm:m-auto md:leading-[110%] leading-[120%] mb-[2%] ${styles.paddingX}`}
      >
        <img
          src={xAbout}
          className="md:w-[50px] w-[40px] float-left md:mr-[8%] mr-[5%] pt-[2%] object-contain flex"
        />
        <p className="text-white uppercase">
          WELCOME TO CATSYARD, A SLICE OF WEB3 HEAVEN IN{" "}
          <span className="blue">REAL LIFE</span>
        </p>
      </div>

      <div
        className={`ml-[2.5%] pb-4 pl-4 border-b border-[#aaa] border-l-[1px] w-[97.5%] pr-4 sm:max-w-[600px] `}
      >
        <p className="text-white inter text-[1.2rem] leading-[180%] font-semibold ">
          The kind of place that blurs the lines between physical and digital.
          Where Web3 smashes the 9-to-5 system and unleashes a myriad of
          exciting new opportunities.
        </p>
        <div className="flex justify-between relative">
          <div className="w-[90px]">
            <img
              src={arrowRight}
              className="w-[90px] absolute bottom-0 left-0"
            />
          </div>
          <div className="gothic blue text-right">
            <p className="md:text-[7rem] text-[6.5rem] leading-none">3,333</p>
            <p className="text-[1rem] mt-[-8%]">CATS</p>
          </div>
        </div>
      </div>
      <img src={vector} className="absolute bottom-0 left-0 w-[40%]" />
      <div className="flex absolute bottom-5 w-[97.5%] justify-center ">
        <img src={arrowDown} className=" md:w-[100px] w-[60px]" />
      </div>
    </section>
  );
};

export default Landing;
