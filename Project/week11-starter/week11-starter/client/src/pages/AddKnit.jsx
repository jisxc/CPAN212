// src/components/AddKnit.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addKnit } from '../api/api';  // Ensure correct path to api.js
import { searchYarns, searchPatterns } from '../api/ravelry';  // Ensure correct path to ravelry.js

export default function AddKnit() {
  const navigate = useNavigate();
  const [knitData, setKnitData] = useState({
    yarn: '',
    pattern: '',
    projectName: '',
    // add other fields as needed
  });

  const [yarnSearch, setYarnSearch] = useState('');
  const [patternSearch, setPatternSearch] = useState('');

  const handleKnitSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await addKnit(knitData);
      if (response.status === 200) {
        alert('Knit added successfully!');
        navigate('/knits');
      } else {
        alert('Error adding knit');
      }
    } catch (error) {
      console.error('Error adding knit:', error);
      alert('An error occurred while adding the knit.');
    }
  };

  const handleYarnSearch = async () => {
    try {
      const response = await searchYarns(yarnSearch);
      console.log(response.data);  // Show yarn search results
    } catch (error) {
      console.error('Error searching yarn:', error);
    }
  };

  const handlePatternSearch = async () => {
    try {
      const response = await searchPatterns(patternSearch);
      console.log(response.data);  // Show pattern search results
    } catch (error) {
      console.error('Error searching patterns:', error);
    }
  };

  return (
    <div>
      <h2>Add Knit</h2>
      <form onSubmit={handleKnitSubmit}>
        <div>
          <label>Project Name</label>
          <input
            type="text"
            value={knitData.projectName}
            onChange={(e) => setKnitData({ ...knitData, projectName: e.target.value })}
            required
          />
        </div>
        <div>
          <label>Yarn</label>
          <input
            type="text"
            value={knitData.yarn}
            onChange={(e) => setKnitData({ ...knitData, yarn: e.target.value })}
            required
          />
        </div>
        <div>
          <label>Pattern</label>
          <input
            type="text"
            value={knitData.pattern}
            onChange={(e) => setKnitData({ ...knitData, pattern: e.target.value })}
            required
          />
        </div>
        <button type="submit">Add Knit</button>
      </form>

      <div>
        <h3>Search Yarns</h3>
        <input
          type="text"
          value={yarnSearch}
          onChange={(e) => setYarnSearch(e.target.value)}
          placeholder="Search yarns"
        />
        <button onClick={handleYarnSearch}>Search</button>
      </div>

      <div>
        <h3>Search Patterns</h3>
        <input
          type="text"
          value={patternSearch}
          onChange={(e) => setPatternSearch(e.target.value)}
          placeholder="Search patterns"
        />
        <button onClick={handlePatternSearch}>Search</button>
      </div>
    </div>
  );
}
