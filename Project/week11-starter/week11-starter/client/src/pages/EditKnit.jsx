import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const EditKnit = () => {
  const { id } = useParams();
  const [knitData, setKnitData] = useState(null);

  useEffect(() => {
    // Fetch knit data by ID
    const fetchKnit = async () => {
      const response = await fetch(`/api/knits/${id}`);
      const data = await response.json();
      setKnitData(data);
    };
    fetchKnit();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setKnitData({
      ...knitData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Update the knit data in the backend
    console.log(knitData);
  };

  return (
    <div style={styles.editKnit}>
      {knitData ? (
        <>
          <h2 style={styles.heading}>Edit Knit</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={knitData.name}
              onChange={handleChange}
              placeholder="Enter product name"
              style={styles.input}
            />
            <textarea
              name="description"
              value={knitData.description}
              onChange={handleChange}
              placeholder="Enter product description"
              style={styles.textarea}
            />
            <input
              type="text"
              name="image"
              value={knitData.image}
              onChange={handleChange}
              placeholder="Enter image URL"
              style={styles.input}
            />
            <input
              type="number"
              name="price"
              value={knitData.price}
              onChange={handleChange}
              placeholder="Enter price"
              style={styles.input}
            />
            <button type="submit" style={styles.button}>Update Knit</button>
          </form>
        </>
      ) : (
        <p style={styles.loadingText}>Loading...</p>
      )}
    </div>
  );
};

const styles = {
  editKnit: {
    maxWidth: '500px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  heading: {
    textAlign: 'center',
    marginBottom: '20px',
    fontSize: '2rem',
  },
  input: {
    marginBottom: '10px',
    padding: '10px',
    fontSize: '1rem',
    border: '1px solid #ccc',
    borderRadius: '4px',
    outline: 'none',
    width: '100%',
  },
  textarea: {
    marginBottom: '10px',
    padding: '10px',
    fontSize: '1rem',
    border: '1px solid #ccc',
    borderRadius: '4px',
    outline: 'none',
    width: '100%',
    height: '120px',
    resize: 'vertical',
  },
  button: {
    padding: '10px',
    backgroundColor: '#4caf50',
    color: 'white',
    fontSize: '1rem',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  buttonHover: {
    backgroundColor: '#45a049',
  },
  loadingText: {
    textAlign: 'center',
    fontSize: '1.2rem',
    color: '#666',
  }
};

export default EditKnit;
