const express = require("express");
const cors = require("cors");

const app = express();
const port = 8000;

app.use(cors());

const education = [
  { degree: "Bachelor of Science in Computer Science", school: "University of XYZ", year: "2020" },
  { degree: "Master of Science in Software Engineering", school: "University of ABC", year: "2022" }
];

const experience = [
  { role: "Frontend Developer", company: "Tech Corp", year: "2022-Present" },
  { role: "Intern", company: "Dev Studio", year: "2021" }
];

const overview = {
  name: "Jia Jane",
  bio: "Passionate software developer with a keen interest in React and full-stack development."
};

app.get("/getEdu", (req, res) => {
  res.json(education);
});

app.get("/getExp", (req, res) => {
  res.json(experience);
});

app.get("/getOverview", (req, res) => {
  res.json(overview);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
