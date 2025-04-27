import { useState } from "react";
import CTAButton from "../features/CTAButton";
import { Box, Modal, Typography } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const CertificateCourse = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <section className="certificate-course container max-w-screen-2xl mx-auto sm:px-2 px-4 mt-32">
      <h1 className="text-center">
        <span class="text-[#191919] sm:text-5xl text-2xl ">Our </span>
        <span class="text-[#0195ff] sm:text-5xl text-2xl">Certification</span>
        <span class="text-[#191919] sm:text-5xl text-2xl"> Course</span>
      </h1>

      <div className=" text-center">
        <p className="w-full sm:w-2/4 mx-auto text-[#666666] sm:text-lg text-b sm:mt-6 mt-3">
          Our Certification Course is designed to equip individuals with the
          necessary skills and knowledge to excel in their chosen field.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:mt-10 mt-4">
        <div className="relative">
          <img
            src="/src/assets/course-image.png"
            className="object-cover w-full h-full" // Make sure image fills the container
            alt="real estate"
          />
          <div className="absolute inset-0 flex justify-center items-center">
            <button onClick={handleOpen}>
              <img src="/src/assets/play-button.svg" alt="play modal" />
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-4 justify-center">
          <div className="self-stretch justify-start">
            <span class="text-black font-bold sm:text-lg text-base  ">
              Our Certification Course
            </span>
            <span class="text-black sm:text-lg text-base  ">
              {" "}
              is designed to equip individuals with the necessary skills and
              knowledge to excel in their chosen field. The course is
              comprehensive and covers a wide range of topics, from foundational
              concepts to advanced techniques.
              <br />
              <br />
              The course is ideal for those looking to upskill, reskill, or
              transition into a new career. With our{" "}
            </span>
            <span class="text-black sm:text-lg text-base font-bold  ">
              Certification Course
            </span>
            <span class="text-black sm:text-lg text-base  ">
              , you'll gain a competitive edge in the job market and open up new
              opportunities for{" "}
            </span>
            <span class="text-black sm:text-lg text-base font-bold  ">
              personal
            </span>
            <span class="text-black sm:text-lg text-base  "> and </span>
            <span class="text-black sm:text-lg text-base font-bold ">
              professional growth
            </span>
            <span class="text-black sm:text-lg text-base  ">. </span>
          </div>

          <div className="mt-10">
            <CTAButton text="Explore Now" to="/contact" />
          </div>
        </div>
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </section>
  );
};

export default CertificateCourse;
