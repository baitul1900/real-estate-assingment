import { Box, Container, Typography, Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <>
      <section
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "start",
          alignItems: "center",
          background: `url('/src/assets/Group 36.png') no-repeat center center/cover, linear-gradient(90deg, rgba(15, 139, 233, 0.24) -7.35%, rgba(55, 157, 253, 0.11) 103.68%)`,
          backgroundBlendMode: "overlay",
          margin: 0,
          height: "100vh", // Ensure hero section takes up full height of the viewport
          paddingTop: "220px", // Adjusted padding to account for fixed navbar
        }}
      >
        <Container
          maxWidth="xl"
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            padding: 0, // Remove padding from Container
            gap: "20px",
          }}
        >
          {/* Subheading */}
          <div className="hero-sub">
            <Typography
              variant="body1"
              component="p"
              sx={{
                color: "#0195ff",
                fontWeight: "bold",
                textTransform: "uppercase",
                marginBottom: "0px", // Adjust bottom margin
              }}
            >
              Business Growth Platform 🚀
            </Typography>
          </div>

          {/* Main Heading */}
          <Typography
            variant="h1"
            sx={{
              fontWeight: "bold",
              fontSize: "4rem", // Adjust font size as per your design
              color: "#000", // Black color for "Guaranteed"
              textTransform: "capitalize",
              marginBottom: "10px",
            }}
          >
            Guaranteed <br />
            <span style={{ color: "#0195ff" }}>Real Estate</span> Solutions
          </Typography>

          {/* Subtext */}
          <Typography
            variant="h6"
            sx={{
              color: "#5f6368",
              fontSize: "18px",
              marginBottom: "30px",
              lineHeight: "1.5",
            }}
          >
            Need to sell your real estate fast? Look no further. With our
            guaranteed quick sale option, we provide you the best solution.
          </Typography>

          {/* Call to Action Button */}
          <Link
            to="/get-started" // Link to another route (change to your actual path)
            style={{
              textDecoration: "none",
              width: "fit-content", // Fit the button to content
            }}
          >
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#0195ff",
                color: "white",
                padding: "12px 30px",
                fontSize: "16px",
                borderRadius: "50px",
                textTransform: "capitalize",
                boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)",
                "&:hover": {
                  backgroundColor: "#0276e7", // Hover effect for the button
                },
              }}
            >
              Get Started
            </Button>
          </Link>

          {/* Hero Image */}
        </Container>
      </section>
      <div className="container max-w-screen-lg mx-auto sm:px-2 px-4 mt-[-320px]">

      </div>
      <Box
        sx={{
          marginTop: "30px",
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img
          src="/src/assets/hero-house-image.png" // Replace with your actual image path
          alt="Hero Image"
          style={{
            width: "100%", // Adjust the image width as per your layout
            height: "auto", // Keep the aspect ratio intact
            borderRadius: "10px", // Optional, rounded corners for the image
          }}
        />
      </Box>
    </>
  );
}

export default HeroSection;
