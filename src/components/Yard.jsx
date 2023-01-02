import React from "react";
import styles from "../style";
import { yardBg, yardLogo, yardOne, yardTwo, yardAbsolute } from "../assets";

const Yard = () => {
  return (
    <section
      className={`${styles.paddingX} bg-[url(${yardBg})] bg-no-repeat bg-contain`}
      id="yard"
    >
      <div className="md:w-[25%] w-[30%] mb-3">
        <img src={yardLogo} className="w-full -mt-[2%] z-20" />
      </div>

      <div className={`pb-[10%] ${styles.borderB}`}>
        <div className="grid gap-7 md:grid-cols-2 justify-between">
          <img src={yardOne} className=" mb-[3%] md:w-[95%]" />
          <div className="relative md:row-start-2 ">
            <img src={yardAbsolute} className="absolute w-[20px]" />
            <p className="gothic font-semibold md:text-[2rem] text-[1.5rem] p-3 uppercase leading-[2rem]">
              It sure takes sharp-as-fuck nailz to make it to the Catyard.
            </p>
            <p className="p-3 inter leading-[200%] font-bold md:pr-[15%] pr-1">
              Only the tuff cats make it to Catyard. The rebel cats, the
              zero-bullshit cats. The fuck-the-9-to-5 cats. You see, to those
              cats, the fearless digital nomads, it is a slice of Web3 heaven
              they never ever wanna leave.
            </p>
          </div>
          <img
            src={yardTwo}
            className="w-full md:row-start-1 md:col-start-2 md:row-end-3 row-start-2 mb-[3%]"
          />
        </div>
      </div>
    </section>
  );
};

export default Yard;
