import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Homepage = () => {
  const [knits, setKnits] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state
  const [error, setError] = useState(null); // Add error state

  // Fetch featured knits on component mount
  useEffect(() => {
    const fetchKnits = async () => {
      try {
        const token = localStorage.getItem("authToken");
        const response = await fetch(`${import.meta.env.VITE_SERVER_URL}api/knits`, {
          headers: {
            Authorization: `Bearer ${token}`, // Add token to headers
          },
        });

        if (!response.ok) {
          throw new Error("Error fetching knits.");
        }

        const data = await response.json();
        setKnits(data.slice(0, 5)); // Show the first 5 knits
      } catch (error) {
        console.error("Error fetching knits:", error);
        setError("Failed to fetch knits. Please try again later.");
      } finally {
        setLoading(false); // Set loading to false once the fetch completes
      }
    };

    fetchKnits();
  }, []);

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Featured Knitting Patterns:</h2>

      {loading ? (
        <p>Loading...</p> // Show loading message
      ) : error ? (
        <p style={styles.error}>{error}</p> // Show error message
      ) : (
        <div style={styles.knitList}>
          {knits.length > 0 ? (
            knits.map((knit) => (
              <div key={knit._id} style={styles.knitCard}>
                <h3 style={styles.knitTitle}>{knit.title}</h3>
                <p><strong>Knit by:</strong> {knit.author}</p>
                <p><strong>Price:</strong> ${knit.price.toFixed(2)}</p>
                <Link to={`/knits/${knit._id}`} style={styles.detailsLink}>View Details</Link>
              </div>
            ))
          ) : (
            <p>No knits available at the moment.</p>
          )}
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    padding: "30px",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  heading: {
    color: "#6b4a30",
    fontSize: "2rem",
    borderBottom: "2px solid #6b4a30",
    display: "inline-block",
    marginBottom: "20px",
  },
  knitList: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
  },
  knitCard: {
    backgroundColor: "#fff",
    border: "1px solid #ddd",
    borderRadius: "8px",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
    padding: "20px",
    textAlign: "center",
  },
  knitTitle: {
    fontSize: "1.5rem",
    color: "#6b4a30",
    margin: "10px 0",
  },
  detailsLink: {
    display: "inline-block",
    marginTop: "10px",
    padding: "10px 15px",
    backgroundColor: "#c49d68",
    color: "#f4f1ea",
    textDecoration: "none",
    borderRadius: "5px",
  },
  error: {
    color: "red",
    fontWeight: "bold",
    textAlign: "center",
  },
};

export default Homepage;
