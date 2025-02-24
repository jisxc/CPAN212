import express from 'express';
import cors from "cors";

 
const app = express();
const PORT = process.env.PORT || 8000;
 
// middlelware
app.use(express.urlencoded({extended:true})); // Plain HTML Forms
app.use(express.json()); // accepts json DATA
app.use(cors());
 
// routes
app.get("/", (req, res) => {
  res.send("Welcome to our server");
});

app.get("/data", (req, res) => {
    res.json({
        name: "Harman",
        password: "password123",
        username: "HarmanMann"
    });
  });

  app.post("/login", (req, res)=>{
    console.log(req.body);
    res.json("I got your information")
})
 
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
 
app.use("", (req, res) => {
  res.status(404).send("Page not found");
});