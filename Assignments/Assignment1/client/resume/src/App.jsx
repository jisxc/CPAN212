import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 

const App = () => {
  const [overview, setOverview] = useState(null);
  const [education, setEducationData] = useState([]);
  const [experience, setExperienceData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/getOverview')
      .then((response) => response.json())
      .then((data) => setOverview(data))
      .catch((error) => console.error('Error fetching overview:', error));

    fetch('http://localhost:8000/getEdu')
      .then((response) => response.json())
      .then((data) => setEducationData(data))
      .catch((error) => console.error('Error fetching education:', error));

    fetch('http://localhost:8000/getExp')
      .then((response) => response.json())
      .then((data) => setExperienceData(data))
      .catch((error) => console.error('Error fetching experience:', error));
  }, []);

  if (!overview || education.length === 0 || experience.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <h1>My Online Resume</h1>

      <div className="p-3">
        <h2>{overview.name}</h2>
        <p>{overview.bio}</p>
      </div>

      <div className="p-3">
        <h3>Education</h3>
        {education.map((edu, index) => (
          <div key={index}>
            <h5>{edu.degree}</h5>
            <p>{edu.school}</p>
            <p>{edu.year}</p>
          </div>
        ))}
      </div>

      <div className="p-3">
        <h3>Experience</h3>
        {experience.map((exp, index) => (
          <div key={index}>
            <h5>{exp.role}</h5>
            <p>{exp.company}</p>
            <p>{exp.year}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
