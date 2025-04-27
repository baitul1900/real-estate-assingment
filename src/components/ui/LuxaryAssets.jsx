import React from "react";
import yacht from "../../../src/assets/yacht.svg";
import car from "../../../src/assets/car.svg";
import CTAButton from "../features/CTAButton";

const luxuryData = [
  {
    id: 1,
    title: "Yachts",
    description:
      "The Intersection Of Real Estate And Yachts! You’ve Got A Unique Interest There. Luxury Real Estate Can Indeed Involve Properties With Direct Access To Marinas, Waterfronts, Or Even Private Yacht Mooring Facilities.",
    icon: yacht, // Placeholder for icon (e.g., an SVG or image for a boat)
  },
  {
    id: 2,
    title: "Cars",
    description:
      "Luxury Cars Refer To High-End Vehicles That Offer Superior Performance, Aesthetics, And Amenities. These Cars Are Typically Manufactured By Prestigious Brands Such As Mercedes-Benz, BMW, And Audi, And Are Known For Their Unique Features, Comfort, And Style.",
    icon: car, // Placeholder for icon (e.g., an SVG or image for a car)
  },
];

const LuxaryAssets = () => {
  return (
    <section className="container max-w-screen-2xl mx-auto sm:px-2 px-4 mt-32">
      <h1 className=" text-center">
        <span class="text-black sm:text-5xl text-2xl ">Luxury </span>
        <span class="text-[#0195ff] sm:text-5xl text-2xl ">assets</span>
      </h1>

      <p className="self-stretch text-center justify-start text-[#666666] sm:text-lg text-base font-normal sm:mt-6 mt-3">
        Luxury assets, particularly in the realm of real estate, refer to
        <br />
        high-end properties that are valued for their exclusivity, location,
        design, and amenities.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-16">
        <div>
          <img
            src="/src/assets/luxary-image.png"
            className="w-full object-cover"
            alt="luxary-asstes"
          />
        </div>
        <div className="flex flex-col justify-center gap-6">
          {luxuryData.map((luxury) => (
            <div key={luxury.id} className="flex items-start gap-6">
              <div className="w-20 h-20">
                <img src={luxury.icon} className="w-14 h-14" alt="" />
              </div>

              <div>
                <h1 className="text-black sm:text-3xl text-2xl">
                  {luxury.title}
                </h1>

                <p className="opacity-60  text-[#666666] sm:text-lg text-base  sm:pb-8 pb-3.5">
                  {luxury.description}
                </p>
              </div>
            </div>
          ))}

          <div className="flex items-center justify-start">
            <div className="w-14 h-14 rounded-full"></div>
            <CTAButton text="Explore now " to="/properties" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LuxaryAssets;
