// CTAButton.js
import React from "react";
import { Link } from "react-router-dom";

// A reusable CTAButton component that accepts text and link as props
const CTAButton = ({ text, to, ...props }) => {
  return (
    <Link to={to} className="contact-button" {...props}  >
      {text} 
    </Link>
  );
};

export default CTAButton;
