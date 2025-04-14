import React from "react";

const Footer = () => {
  return (
    <footer
      className="footer"
      style={{
        backgroundColor: "#f7e3d4",  // Soft light color for knitting theme
        color: "#6b4a30",  // Warm brown color, fitting for a cozy vibe
        textAlign: "center",
        padding: "20px 0",
        fontFamily: '"Georgia", serif',  // Cozy and warm font family
        fontSize: "1rem",
        borderTop: "4px solid #c49d68",  // Adds a border for a knitted border effect
      }}
    >
      <p>&copy; 2025 Knitting. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
