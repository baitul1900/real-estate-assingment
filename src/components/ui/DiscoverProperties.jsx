import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import CTAButton from "../features/CTAButton";

const propertyData = [
  {
    id: 1,
    title: "Ready to Move In",
    description:
      "Exciting Times! Being 'Ready To Move' In Real Estate Typically Means You're Prepared To Find And Purchase A New Property",
    icon: "icon-placeholder", // Replace with actual icon later
  },
  {
    id: 2,
    title: "Off Plan Properties",
    description:
      "Off-Plan Properties Refer To Real Estate Units That Are Being Constructed Or Developed, But Have Not Yet Been Completed Or Occupied.",
    icon: "icon-placeholder", // Replace with actual icon later
  },
  {
    id: 3,
    title: "Secondary Market",
    description:
      "The Secondary Market In Real Estate Refers To The Existing Pool Of Homes, Commercial Properties, And Other Types Of Properties That Are Already Built And Occupied.",
    icon: "icon-placeholder", // Replace with actual icon later
  },
];

const DiscoverProperties = () => {
  return (
    <section className="discover-properties container max-w-screen-2xl mx-auto sm:px-2 px-4 mt-32">
      <h1 className="text-center ">
        <span class="text-black sm:text-5xl text-2xl  capitalize">
          Discover the
          <br />
          Perfect{" "}
        </span>
        <span class="text-[#0195ff] sm:text-5xl text-2xl  capitalize">
          Properties
        </span>
        <span class="text-black text-5xl  capitalize"> with Ease</span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-16">
        <div className="flex flex-col justify-between gap-6">
          {propertyData.map((property) => (
            <div key={property.id} className="flex items-start gap-6">
              <div>
                <img
                  src="https://placehold.co/600x400"
                  className="w-20 h-20"
                  alt=""
                />
              </div>

              <div>
                <h1 className="text-black sm:text-3xl text-2xl">
                  {property.title}
                </h1>

                <p className=" justify-start text-[#666666] sm:text-lg text-base">
                  {property.description}
                </p>
              </div>
            </div>
          ))}

          <div className="flex items-center justify-start">
            <div className="w-14 h-14 rounded-full">
                
            </div>  
            <CTAButton text="Explore now " to="/properties" />
          </div>
        </div>

        <div>
          <img
            src="/src/assets/facilities-image.png"
            className="w-full object-cover"
            alt="real estate"
          />
        </div>
      </div>
    </section>
  );
};

export default DiscoverProperties;
