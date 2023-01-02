import React from "react";
import styles from "../style";
import {
  team1,
  team2,
  team3,
  team4,
  team5,
  team6,
  team7,
  team8,
  teamLogo,
} from "../assets";

const teams = [
  {
    id: 1,
    name: `goku`,
    position: `Co-founder`,
    twitter: `https://twitter.com/CatsyardGoku`,
    img: team1,
    description: `In love with NFTs, real estate and people, working to bring all three together.`,
  },
  {
    id: 2,
    name: `remo`,
    position: `Co-founder`,
    img: team2,
    description: `Father, Builder & the person behind Catsyard IRL utilities.`,
    twitter: ``,
  },
  {
    id: 3,
    name: `NameGames`,
    position: `Marketing & Growth`,
    img: team3,
    twitter: `https://twitter.com/SolanaWakeBake`,
    description: `web3 pioneer, social growth hacker, bitcoin class of 2012.
`,
  },
  {
    id: 4,
    name: `lee`,
    position: `Lead Artists`,
    twitter: ``,
    img: team4,
    description: `Mother, feminist, crazy.
    Art maxi since 1988.`,
  },
  {
    id: 5,
    name: `Tr0pic`,
    position: `PR manager`,
    twitter: `https://twitter.com/TropicanaNFT`,
    img: team5,
    description: `Lover of JPEGs and DEFI`,
  },
  {
    id: 6,
    name: `Jawi`,
    position: `PR manager`,
    twitter: `https://twitter.com/SolJawi`,
    img: team6,
    description: `Thailand maxi, web3 marketer and a lemon-bot #TakeJawiToThailand`,
  },
  {
    id: 7,
    name: `Circe`,
    twitter: `https://twitter.com/decircusmaster`,
    position: `Lead Marketing & Ambassadors`,
    img: team7,
    description: `Web 3 enthusiast who loves content creation & self improvement.`,
  },
  {
    id: 8,
    name: `Bigi`,
    position: `Lead Devs`,
    img: team8,
    twitter: ``,
    description: `Crypto native software engineer, Rust dev.`,
  },
];

const Team = () => {
  return (
    <section
      id="team"
      className={`${styles.paddingX} ${styles.borderB} border-black`}
    >
      <img src={teamLogo} alt="team logo" className="w-[40%] m-auto" />
      <div className="flex justify-evenly flex-wrap w-full">
        {teams.map((member) => (
          <div className="md:w-[24%] w-[30%] text-center mb-4" key={member.id}>
            <img src={member.img} alt="" className="mb-4" />
            <p className="gothic text-[2rem] capitalize mb-0 px-[1%]">
              {member.twitter && (
                <a href={member.twitter} target="_blank">
                  {member.name}
                  <i className="fa-brands fa-twitter text-[#1DA1F2] text-[.8em]"></i>
                </a>
              )}
              {!member.twitter && member.name}{" "}
            </p>
            <p className="inter text-[.8rem] md:text-[1rem] leading-[150%]">
              {member.position} <br />
              <span>{member.description}</span>
            </p>
          </div>
        ))}
      </div>
      <h4 className={styles.heading4}>
        + 10 high-skilled, sharp-minded, superpowered NFT maxi’s, ready to take
        off.
      </h4>
    </section>
  );
};

export default Team;
