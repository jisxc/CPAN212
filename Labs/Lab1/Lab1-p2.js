const http =require("http")
const fs = require("fs");

const app = http.createServer((req, res) => {
    if(req.url === "/") {
        res.end("Hello from the server")
    }

    else if(req.url === "/homepage") {
        let webpage = fs.readFileSync("homepage.html")
        res.end(webpage)
    }
    else if(req.url === "/about") {
        let webpage = fs.readFileSync("about.html")
        res.end(webpage)
    }
    else if(req.url === "/contact_us") {
        let webpage = fs.readFileSync("contact_us.html")
        res.end(webpage)
    }
    else if(req.url === "/login") {
        let webpage = fs.readFileSync("login.html")
        res.end(webpage)
    }
    else {res.end("Error 404 - Page not Found")}
    
});

let PORT = 8000;
app.listen(8000, ()=> {
    console.log(`http://localhost:${PORT}`)
})