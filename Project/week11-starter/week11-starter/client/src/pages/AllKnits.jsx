import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';  // Add this import statement

const AllKnits = () => {
  const [knits, setKnits] = useState([]);

  useEffect(() => {
    // Fetch knits from your API
    const fetchKnits = async () => {
      const response = await fetch('/api/knits');
      const data = await response.json();
      setKnits(data);
    };
    fetchKnits();
  }, []);

  return (
    <div className="all-knits">
      <h2>All Knits</h2>
      <div className="knit-list">
        {knits.map((knit) => (
          <div className="knit-card" key={knit.id}>
            <img src={knit.image} alt={knit.name} />
            <h3>{knit.name}</h3>
            <p>{knit.description}</p>
            <Link to={`/knit/${knit.id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllKnits;
