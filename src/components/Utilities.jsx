import React, { useState } from "react";
import styles from "../style";
import {
  utilityBg,
  utilityBgMobile,
  wasd,
  plus,
  mask,
  yardLoot,
  close,
} from "../assets";

const utilities = [
  {
    id: 1,
    status: false,
    title: "seasonal rewards",
    details: (
      <div className="inter w-full text-white sm:text-[1.2rem] text-[1.1rem] md:font-semibold font-normal md:leading-[200%] leading-[150%]">
        <p>
          Holders who stake for a certain period (e.g, one month of staking)
          will be able to win some of the seasonal prizes, which will include
          but won't be limited to cash prizes, NFTs, limited edition clothing,
          and more.
        </p>
      </div>
    ),
  },
  {
    id: 2,
    status: false,
    title: "irl resort",
    details: (
      <div className="inter w-full text-white sm:text-[1.2rem] text-[1.1rem] md:font-semibold font-normal md:leading-[200%] leading-[150%]">
        <p>
          Catsyard is a hospitality and lifestyle brand that focuses on creating
          environments for Web3, Gen Zs, millennials, and Digital nomads. We
          offer spaces to live, work and play all over the world.
        </p>
        <ul className="pl-[5%] list-disc">
          <li>
            At least 2+ rooms per resort (location) will be exclusively reserved
            for holders. Resort booking will be open for holders annually.
          </li>
          <li>
            Impromptu Reservations: When the resort is not fully booked or
            bookings are canceled, holders will be able to win those spots with
            short notice and at no cost through a raffle system.
          </li>
          <li>
            NFT ownership grants you discount(s) during booking and for every
            Catsyard service at the resort.
          </li>
          <li>
            Staking earns you $CYARD (To be discussed in detail), which can be
            used for full payment when booking and also carrying out
            transactions within the resort.
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: 3,
    status: false,
    title: "engage-2-earn",
    details: (
      <div className="inter w-full text-white sm:text-[1.2rem] text-[1.1rem] md:font-semibold font-normal md:leading-[200%] leading-[150%]">
        Quest-based Engage2Earn Quest-based programs are made for Catsyard
        holders to get rewards for bringing value. Catsyard will outsource
        quest-based tasks for the community to fulfill on dynamic bases,
        bringing operational/marketing value.
        <ul className="pl-[5%] list-disc">
          <li>Complete quests = get rewards</li>
        </ul>
      </div>
    ),
  },
  {
    id: 4,
    status: false,
    title: "$yrd-xp + $LUV",
    details: (
      <div className="inter w-full text-white sm:text-[1.2rem] text-[1.1rem] md:font-semibold font-normal md:leading-[200%] leading-[150%]">
        <p>
          Introducing $YRD, using experience points, you can collect and spend
          on multiple things in all Catsyard online activities. All $YRD will be
          distributed among Catsyard holders through staking.
        </p>
        <br />
        <p>
          Catsyard partnered with Defi District to provide value to holders
          utilizing $LUV.
        </p>
        <ul className="pl-[5%] list-disc">
          <li>$LUV, a cross-worlds token-driven ecosystem.</li>
        </ul>
        <p>
          Holders will earn $LUV through three unique staking reward mechanisms.
        </p>
      </div>
    ),
  },
  {
    id: 5,
    status: false,
    title: "Community",
    details: (
      <div className="inter w-full text-white sm:text-[1.2rem] text-[1.1rem] md:font-semibold font-normal md:leading-[200%] leading-[150%]">
        <p>
          Our community is made for people that have come to the realization
          that physical interaction can not be substituted.
          <br />
          <br />
          It's for Web 3 enthusiasts, entrepreneurs, digital nomads, or people
          who aspire to be one of the above and who like to combine work with
          socializing and fun.
        </p>
      </div>
    ),
  },
  {
    id: 6,
    status: false,
    title: "Hotel Ambassadors",
    details: (
      <div className="inter w-full text-white sm:text-[1.2rem] text-[1.1rem] md:font-semibold font-normal md:leading-[200%] leading-[150%]">
        <p>
          A Travel-Agent Affiliate Program under our company umbrella (Booking
          Referral System)
          <br />
          Generate link {">"} Drive traffic {">"} Get rewards.
        </p>
      </div>
    ),
  },
  {
    id: 7,
    status: false,
    title: "yardloot",
    details: (
      <div className="inter w-full text-white sm:text-[1.2rem] text-[1.1rem] md:font-semibold font-normal md:leading-[200%] leading-[150%]">
        <p>
          Catsyard is building a new way to play and interact with NFTs.
          <br />
          <br />
          The new Yard Loot gaming platform brings the fun back to the space
          with an innovative system that opens new possibilities for you to have
          what you want.
          <br />
          <br />
          All while being sustainable and giving liquidity back to the Solana
          Ecosystem. <br />
          <br />
          Read more in our{" "}
          <a
            href="https://yardpaper.gitbook.io/yardpaper/catsyard-products/yardloot-platform"
            className=" font-semibold"
            target="_blank"
          >
            Yardpaper
          </a>
          .
        </p>
      </div>
    ),
  },
];

const Utilities = () => {
  const [ut, setUt] = useState(utilities);
  const ShowUtilities = () => (
    <div className="h-full w-full absolute top-0 z-30 show-utilities p-5 overflow-y-scroll scroller">
      {ut.map((each) => {
        return (
          <div className={`${!each.status && "hidden"}`} key={each.id}>
            <div className="relative flex justify-between">
              <p className="text-white bg-[url(./assets/number.webp)] bg-no-repeat w-[40px] h-[40px] bg-contain text-[2rem] flex justify-center items-center gothic">
                {each.id}
              </p>
              <img
                src={close}
                className="w-[2.5rem] cursor-pointer animate-pulse"
                onClick={() => display()}
              />
            </div>
            <h2 className="gothic md:text-[5rem] text-[3rem] sm:text-[4rem] text-white ms:my-[2%] my-[1%] uppercase">
              {each.title}
            </h2>
            {each.details}
          </div>
        );
      })}
    </div>
  );

  const display = (number) => {
    setShow((prev) => !prev);
    const disp = ut.map((each, i) => {
      i === number
        ? (each = { ...each, status: true })
        : (each = { ...each, status: false });
      return each;
    });
    setUt(disp);
  };

  const [show, setShow] = useState(false);
  return (
    <div id="utilities" className="pb-[10%] relative">
      <h4 className={styles.heading4}>
        planning a global takeover of epic proportions. that’s how you will
        benefit from it.
      </h4>
      <div className="relative">
        <img
          src={utilityBg}
          className="hidden md:block w-full h-auto opacity-0"
        />
        <img
          src={utilityBgMobile}
          className=" md:hidden w-full min-h-[600px] opacity-0"
        />
        <div
          className={`h-full absolute top-0 left-0 w-full grid grid-col-1 md:grid-cols-2 gap-1 ${
            show && "blur-[40px]"
          }`}
        >
          <div className="h-full w-full grid gap-1 grid-col-2 grid-rows-[27%]">
            <div
              className=" col-start-1 col-span-2 border border-[#00000080] bg-[#f5f5f5] relative hover:bg-[#eee] hover:border-2 md:hover:border-4 transition-all ease-linear duration-200"
              onClick={() => display(0)}
            >
              <img src={plus} className="absolute top-2 left-2 sm:w-[20px] w-[18px]" />
              <p className="absolute bottom-[1%] left-2 uppercase gothic md:text-[3rem] text-[2rem] sm:text[2.5rem] leading-[110%]">
                seasonal rewards
              </p>
            </div>
            <div
              className=" col-start-1 col-span-1 row-start-2 h-full row-span-5 border border-[#00000080] bg-[#f5f5f5] relative hover:bg-[#eee] hover:border-2 md:hover:border-4 transition-all ease-linear duration-200 w-full"
              onClick={() => display(1)}
            >
              <img src={plus} className="absolute top-2 left-2 w-[20px]" />
              <p className="absolute bottom-[1%] left-2 uppercase gothic md:text-[3rem] text-[2.1rem] sm:text[2.5rem] text-white leading-[110%] z-20">
                irl resort
              </p>
              <img
                src={wasd}
                className="absolute bottom-0 left-0 h-[105%] z-10"
              />
            </div>
            <div
              className=" col-start-2 col-span-1 row-start-2 border border-[#00000080] bg-[#f5f5f5] relative row-span-2 hover:bg-[#eee] hover:border-2 md:hover:border-4 transition-all ease-linear duration-200"
              onClick={() => display(2)}
            >
              <img src={plus} className="absolute top-2 left-2 w-[20px]" />
              <p className="absolute bottom-[1%] left-2 uppercase gothic md:text-[3rem] text-[2.1rem] sm:text[2.5rem] leading-[110%]">
                engage-2-earn
              </p>
            </div>
            <div
              className=" col-start-2 col-span-1 row-start-4 border border-[#00000080] bg-[#f5f5f5] relative row-span-3 hover:bg-[#eee] hover:border-2 md:hover:border-4 transition-all ease-linear duration-200"
              onClick={() => display(3)}
            >
              <img src={plus} className="absolute top-2 left-2 w-[20px]" />
              <p className="absolute bottom-[1%] left-2 uppercase gothic md:text-[3rem] text-[2.1rem] sm:text[2.5rem] leading-[110%]">
                $LUV + <br />
                $YRD-XP
              </p>
            </div>
          </div>
          <div className="h-full w-full grid gap-1 grid-col-2 grid-rows-[38%]">
            <div
              className=" col-start-1 col-span-1 row-start-1 h-full row-span-2 border border-[#00000080] bg-[#f5f5f5] relative hover:bg-[#eee] hover:border-2 md:hover:border-4 transition-all ease-linear duration-200 com"
              onClick={() => display(4)}
            >
              <img src={plus} className="absolute top-2 left-2 w-[20px]" />
              <p className="absolute top-0 text-white right-2 uppercase gothic md:text-[3rem] text-[2.1rem] sm:text[2.5rem] leading-[110%]">
                community
              </p>
              <img src={mask} className="absolute bottom-0 left-0 w-[90%]" />
            </div>
            <div
              className=" col-start-2 col-span-1 row-start-1 border border-[#00000080] bg-[#f5f5f5] relative row-span-2 hover:bg-[#eee] hover:border-2 md:hover:border-4 transition-all ease-linear duration-200"
              onClick={() => display(5)}
            >
              <img src={plus} className="absolute top-2 left-2 w-[20px]" />
              <p className="absolute bottom-[1%] left-2 uppercase gothic md:text-[3rem] text-[2.1rem] sm:text[2.5rem] leading-[110%]">
                hotel ambassadors
              </p>
            </div>
            <div
              className=" col-start-1 col-span-2 border border-[#00000080] relative row-start-3 bg-[url(./assets/yardloot-bg.webp)] bg-no-repeat bg-cover bg-center"
              onClick={() => display(6)}
            >
              <img
                src={yardLoot}
                className="absolute left-[1em] h-[4rem] bottom-4"
              />
            </div>
          </div>
        </div>
        {show && <ShowUtilities />}
      </div>
    </div>
  );
};

export default Utilities;
