import express from "express";
import dotenv from "dotenv";
dotenv.config();
const app = express(); 
const PORT = process.env.PORT || 8000; 

app.get("/", (req, res)=>{
    res.send("Welcome to the server - GET")
})

app.post("/", (req, res)=>{
    res.send("Welcome to the server - POST")
})

app.put("/", (req, res)=>{
    res.send("Welcome to the server - PUT")
})

app.delete("/", (req, res)=>{
    res.send("Welcome to the server - DELETE")
})

// https://www.youtube.com/watch?v=1BVJzaXv3rk
// DOMAIN /endpoint
// lh:3000/watch    ?   v=1BVJzaXv3rk

app.get("/watch", (req, res)=>{
    console.log("URL call:")
    console.log(req.url)
    console.log("Method call:")
    console.log(req.method)
    console.log("Headers call:")
    console.log(req.headers)
    console.log("Query call:")
    console.log(req.query)
    console.log("params call:")
    console.log(req.params)
    console.log("body call:")
    console.log(req.body)
    res.send("Welcome to the watch list")
})

// https://www.ebay.ca/itm/324127246257
// DOMAIN /itm /325127246257

app.get("/itm/:itemID", (req, res)=>{
    console.log("Query call:")
    console.log(req.query)
    console.log("params call:")
    console.log(req.params)
    res.send("Welcome to the item list")
})

app.get("/", (req, res)=>{
    // do something 
    res
})

app.listen(PORT, ()=>{
    console.log(`http://localhost:${PORT}`)
})

/*
/https:
/en-ca
/category
/windows-laptops
/36711
?
path=
category:Computers+&+Ta
*/


