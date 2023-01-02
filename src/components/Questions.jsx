import React, { useState, useEffect } from "react";
import styles from "../style";
import { logo, questionBG } from "../assets";
import Button from "./Button";

const Questions = () => {
  const [questions, setQuestions] = useState([
    {
      id: 1,
      question: "WHAT WILL THE MINT PRICE BE?",
      status: false,
      answer: (
        <>
          <p>TBD</p>
          <ul className="pl-[5%] list-disc">
            <li>
              Since we are funding the real estate through treditional
              investors, we can keep the mint price low.
            </li>
          </ul>
        </>
      ),
    },
    {
      id: 2,
      question: "What does catyard focus on?",
      status: false,
      answer: (
        <div>
          CatsYard is a multifaceted business making the first ever web3 chain
          of IRL resorts. Via our Network of IRL Hotel Chains, Vacation Resorts
          & Retreats, we have adopted a fashion-forward business model
          incorporating blockchain technology and digital currency into our
          products and services.
          <br />
          We are focused on two main sectors: <br />
          <span className="font-semibold">IRL:</span> <br />
          <ul className="pl-[5%] list-disc">
            <li>Worldwide resort brand and supportive products.</li>
          </ul>
          <span className="font-semibold">Web3:</span> <br />
          <ul className="pl-[5%]  list-disc">
            <li>
              YardLoot's platform and products that match its vision and are
              either beneficial or cool af.
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: 3,
      question: "Wen mint?",
      status: false,
      answer: <p>TBD. *announcements in our Discord.</p>,
    },
    {
      id: 4,
      question: "How can I get Whitelist?",
      status: false,
      answer: (
        <p>
          The best way to get a whitelist is by being an active member of our
          community in discord and on social media. Simply try to have genuine
          conversations with other Catsyard.
          <br />
          <br />
          Another way to get whitelist is by making content related to Catsyard,
          such as memes, art, emojis, graphics and more. <br />
          <br />
          Lastly, you can also get it by participating in giveaways, games run
          by mods, smash karts, lolbeans, gartic, rumble and more.
        </p>
      ),
    },
    {
      id: 5,
      question: "do holders get to stay at the resort?",
      status: false,
      answer: (
        <>
          <p>
            Holders will be able to enjoy a plethora of benefits at our resort:
          </p>
          <ul className="pl-[5%] list-disc">
            <li>
              Staking earns you $CYARD, which you can use to book a vacation.
            </li>
            <li>
              Varieties of suites(not less then two) are to be reserved only for
              holders and without a fee.
            </li>
            <li>
              When the resort is not fully booked, or bookings are canceled,
              holders will be able to win those spots with short notice and for
              free through a raffle.
            </li>
            <li>
              Being a holder grants you a discount of 25% on all booking and
              Catsyard IRL experiances.
            </li>
          </ul>
        </>
      ),
    },
  ]);

  const showAnswer = (index) => {
    const testing = questions.map((each, i) => {
      i === index
        ? (each = { ...each, status: !questions[index].status })
        : (each = { ...each, status: false });
      // console.log(each);
      return each;
    });
    setQuestions(testing);
  };
  return (
    <section
      id="faq"
      className={`gothic font-normal pr-[0%] md:pr-[8%] pb-[10%] flex flex-wrap md:flex-row ${styles.borderB} border-[#a2edff] relative`}
    >
      <h2 className="pl-[8%] -mt-[8%] text-[3.5rem] uppercase md:text-[4rem] w-full">
        popular <br className="hidden md:block" />
        questions
      </h2>
      <div className="w-full flex flex-col-reverse md:flex-row">
        <div className="md:w-[55.2%] w-full">
          <img src={questionBG} className="w-full" />
          <div className="w-[60%] flex justify-center -mt-[10%]">
            <div className="sm:block hidden">
              <Button />
            </div>
          </div>
        </div>
        <div className="md:w-[40%] w-full px-[10px] md:px-0 md:pb-0 pb-[10%]">
          {questions.map((each, index) => {
            return (
              <div
                className="mb-[0.7em] border border-black p-[0.8em] bg-[#fdf9fc] rounded shadow-md"
                key={index}
              >
                <div className="flex justify-between ">
                  <p className="md:text-[2rem] text-[1.5rem] uppercase">
                    {each.question}
                  </p>
                  <button
                    type="button"
                    className=""
                    onClick={() => showAnswer(index)}
                  >
                    <i
                      className={`fa-solid fa-caret-down ${
                        each.status ? "rotate" : "down"
                      } md:text-[3rem] text-[2rem] transition-all duration-500 btn`}
                      id={each.index}
                    ></i>
                  </button>
                </div>
                <div
                  className={`inter  pr-[10%] leading-[180%] font-semibold transition-all ease-linear duration-100 ${
                    each.status
                      ? "showmen"
                      : "max-h-0 overflow-hidden opacity-0"
                  }`}
                >
                  <div className="border-t border-black pt-[.5em]">
                    {each.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Questions;
