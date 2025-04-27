import React from "react";
import { Box, Container, Typography, Grid, Button } from "@mui/material";

const listData = [
  { id: 1, title: "Properties" },
  { id: 2, title: "Luxury Asset" },
  { id: 3, title: "Market Insights" },
  { id: 4, title: "Marketing Tool" },
  { id: 5, title: "Professional Service" },
  { id: 6, title: "Networking & Event" },
  { id: 7, title: "Education & Resource" },
  { id: 8, title: "Referral & Reward" },
];

const ExploreSection = () => {
  return (
    <section className="container max-w-screen-2xl mx-auto sm:px-2 px-4 mt-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
        <div className="bg-white rounded-[30px] p-10">
          <div>
            <h1 className="justify-start">
              <span className="text-black sm:text-5xl text-2xl">
                Explore Our Exclusive
                <br />
              </span>
              <span className="text-[#0195ff] sm:text-5xl text-2xl capitalize">
                Real Estate
              </span>
              <span className="text-black sm:text-5xl text-2xl capitalize">
                {" "}
                Feature
              </span>
            </h1>

            <p className=" text-[#666666] text-lg capitalize  sm:mt-6 mt-3 mb-6">
              A real estate feature sheet is a list of features and updates for
              your seller's home. The Multiple Listing Services (MLS) has a lot
              of great information already built in but having a feature sheet
              can help your sellers showcase their home in a more personal way.
            </p>
          </div>

          {/* Grid Layout for the list items */}
          <Grid container spacing={4}>
            {/* Left Column */}
            <Grid item xs={12} sm={6}>
              {listData.slice(0, 4).map((item) => (
                <Box
                  key={item.id}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "12px",
                  }}
                >
                  <Box
                    sx={{
                      width: "30px",
                      height: "30px",
                      borderRadius: "50%",
                      background: "#0195ff",
                      color: "#fff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginRight: "10px",
                    }}
                  >
                    <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                      {`0${item.id}`}
                    </Typography>
                  </Box>
                  <Typography variant="body1" sx={{ color: "#333" }}>
                    {item.title}
                  </Typography>
                </Box>
              ))}
            </Grid>

            {/* Right Column */}
            <Grid item xs={12} sm={6}>
              {listData.slice(4).map((item) => (
                <Box
                  key={item.id}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "12px",
                  }}
                >
                  <Box
                    sx={{
                      width: "30px",
                      height: "30px",
                      borderRadius: "50%",
                      background: "#0195ff",
                      color: "#fff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginRight: "10px",
                    }}
                  >
                    <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                      {`0${item.id}`}
                    </Typography>
                  </Box>
                  <Typography variant="body1" sx={{ color: "#333" }}>
                    {item.title}
                  </Typography>
                </Box>
              ))}
            </Grid>
          </Grid>

         
        </div>

        <div className="flex justify-end">
          <img
            src="/src/assets/feature-section-image.png"
            alt="Hero Image"
            className="hero-image object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default ExploreSection;
