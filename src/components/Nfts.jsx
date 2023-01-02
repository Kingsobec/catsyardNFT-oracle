import React from "react";
import styles from "../style";
import { nft1, nft2, nft3, nft4, nft5, nft6, nft7, nft8 } from "../assets";
const nfts = [
  {
    id: 1,
    number: nft1,
    style: "hidden sm:block",
  },
  {
    id: 2,
    number: nft2,
    style: "",
  },
  {
    id: 3,
    number: nft3,
    style: "",
  },
  {
    id: 4,
    number: nft4,
    style: "",
  },
  {
    id: 5,
    number: nft5,
    style: "hidden sm:block",
  },
  {
    id: 6,
    number: nft6,
    style: "",
  },
  {
    id: 7,
    number: nft7,
    style: "",
  },
  {
    id: 8,
    number: nft8,
    style: "",
  },
];
const Nfts = () => {
  return (
    <section
      className={`pb-[10%] ${styles.borderB} ${styles.paddingX}`}
      id="nfts"
    >
      <h4 className={styles.heading4}>
        Oh man, these are some chill cats. look at ‘em!
      </h4>
      <div className={`flex justify-between flex-wrap w-full `}>
        {nfts.map((nft) => (
          <img
            src={nft.number}
            alt={`nft${nft.id}`}
            className={`sm:w-[24%] w-[32%] mb-[1%] ${nft.style} shadow-slate-100 shadow-2xl`}
            key={nft.id}
          />
        ))}
      </div>
    </section>
  );
};

export default Nfts;
