import React from "react";
import styles from "../style";
import { roadmap, resortIMG } from "../assets";

const Roadmap = () => {
  return (
    <section className=" w-full" id="roadmap">
      <h4 className={styles.heading4}>roadmap</h4>
      <div className="flex pb-[10%] relative justify-center items-center">
        <img src={roadmap} alt="roadmap" className="max-h-[600px]" />
        <p className="absolute md:text-[6rem] text-[4rem] gothic text-white">
          coming soon
        </p>
      </div>
      <img src={resortIMG} alt="resort" className="mb-[10%]" />
    </section>
  );
};

export default Roadmap;
