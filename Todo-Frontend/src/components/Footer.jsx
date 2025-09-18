// Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4 mt-5 shadow-sm">
      <div className="container text-center">
        <p className="mb-1">&copy; {new Date().getFullYear()} TODO Management. All rights reserved @CoderShubham</p>

      </div>

      <style>
        {`
          .footer-link {
            transition: all 0.3s ease;
            text-decoration: none;
          }
          .footer-link:hover {
            color: #ffd700 !important;
            transform: translateY(-2px);
          }
        `}
      </style>
    </footer>
  );
};

export default Footer;
