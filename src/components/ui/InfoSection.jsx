import React from "react";
import { Link } from "react-router-dom";

const cardData = [
  {
    id: 1,
    title: "For Developer",
    description:
      "Get access to thousands of agents who are ready to sell your project",
    count: 12350,
    buttonText: "Get Started",
  },
  {
    id: 2,
    title: "For Agents",
    description:
      "Get access to thousands of agents who are ready to sell your project",
    count: 7530,
    buttonText: "Get Started",
  },
];

const InfoSection = () => {
  return (
    <div className="info-section container max-w-screen-2xl mx-auto sm:px-2 px-4 mt-20">
      <div className="info-content rounded-[30px] p-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {cardData.map((card) => (
            <div
              key={card.id}
              className="card sm:pl-8 pl-4 sm:pr-24 pr-12 sm:py-6 py-3 bg-white rounded-3xl"
            >
              <div className="w-14 h-14 bg-gradient-to-r from-[#0f8ce9] to-[#66b3fa] rounded-full mb-4">
                <p className="text-white text-2xl font-bold flex items-center justify-center h-full">
                  {`0${card.id}`}
                </p>
              </div>

              <h1 className="text-black text-3xl font-normal capitalize">
                {card.title}
              </h1>

              <p className="opacity-60 justify-start text-[#666666] text-lg font-normal leading-normal sm:pb-8 pb-3.5">
                {card.description}
              </p>

              <h5 className="text-black text-3xl font-normal capitalize">
                {card.count}
              </h5>
              <p className="opacity-60 justify-start text-[#666666] text-lg font-normal">
                Agents on platform
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-center sm:mt-12 mt-8 gap-4">
          <div className="px-6 py-3 bg-black rounded-[100px] inline-flex flex-col justify-start items-start gap-1 ">
            <button className="inline-flex justify-start items-center gap-3">
              <img className="w-10 h-10" src="/src/assets/apple-store.png" />
              <p className="justify-start text-white text-lg font-normal">
                App Store
              </p>
            </button>
          </div>

          <div className="px-6 py-3 bg-black rounded-[100px] inline-flex flex-col justify-start items-start gap-1 ">
            <button className="inline-flex justify-start items-center gap-3">
              <img className="w-10 h-10" src="/src/assets/playstore.png" />
              <p className="justify-start text-white text-lg font-normal">
                Google Play
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
