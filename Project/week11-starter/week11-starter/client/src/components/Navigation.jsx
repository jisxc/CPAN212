import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode"; // Correct import

const Navigation = () => {
  const navigate = useNavigate(); // Hook to navigate after logging out
  const token = localStorage.getItem("authToken"); // Get the token from localStorage
  const isAuthenticated = token ? true : false; // Check if the user is authenticated

  let userName = "Guest";
  if (isAuthenticated) {
    try {
      // Decode the token and get the user's name
      const decodedToken = jwtDecode(token); // Use jwt-decode to decode the token
      userName = decodedToken?.first_name || "User"; // Get the user's name or default to "User"
    } catch (error) {
      console.error("Error decoding token", error);
    }
  }

  const handleLogout = () => {
    localStorage.removeItem("authToken"); // Remove the token from localStorage
    navigate("/"); // Redirect to the homepage after logout
  };

  return (
    <header
      className="navigation"
      style={{
        backgroundColor: "#e8d8b3",  // Light beige background for a soft knitting vibe
        color: "#6b4a30",  // Warm brown color for the text
        padding: "15px 20px",
        fontFamily: "'Georgia', serif",  // Cozy font for the navigation
        borderBottom: "4px solid #c49d68",  // Border to match the knitted edge effect
      }}
    >
      <h1 className="brand-title" style={{ fontSize: "2rem", textAlign: "center" }}>
        Knitting
      </h1>
      <nav style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
        <Link
          to="/"
          style={{
            color: "#6b4a30",
            textDecoration: "none",
            fontSize: "1.2rem",
            fontWeight: "bold",
            padding: "5px 10px",
          }}
        >
          Home
        </Link>
        <Link
          to="/knits"
          style={{
            color: "#6b4a30",
            textDecoration: "none",
            fontSize: "1.2rem",
            fontWeight: "bold",
            padding: "5px 10px",
          }}
        >
          All Knits
        </Link>
        <Link
          to="/knits/add"
          style={{
            color: "#6b4a30",
            textDecoration: "none",
            fontSize: "1.2rem",
            fontWeight: "bold",
            padding: "5px 10px",
          }}
        >
          Add Knit
        </Link>

        {isAuthenticated ? (
          <>
            <span
              style={{
                color: "#6b4a30",
                fontSize: "1rem",
                fontWeight: "bold",
              }}
            >
              Hello, {userName}!
            </span>
            <button
              onClick={handleLogout}
              style={{
                backgroundColor: "#c49d68", // Soft brown background
                color: "white",
                border: "none",
                padding: "8px 16px",
                fontSize: "1rem",
                cursor: "pointer",
                borderRadius: "4px",
              }}
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link
              to="/register"
              style={{
                color: "#6b4a30",
                textDecoration: "none",
                fontSize: "1.2rem",
                fontWeight: "bold",
                padding: "5px 10px",
              }}
            >
              Register
            </Link>
            <Link
              to="/login"
              style={{
                color: "#6b4a30",
                textDecoration: "none",
                fontSize: "1.2rem",
                fontWeight: "bold",
                padding: "5px 10px",
              }}
            >
              Login
            </Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Navigation;
