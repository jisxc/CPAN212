const http = require("http")
const app = http.createServer((req, res)=>{
    if(req.url === "/") {
        res.end("hello from Home")

    } else if(req.url === "/about") {
        res.end("hello from About")

    } else if(req.url === "/contact_us") {
        res.end("hello from Contact Us")

    } else if(req.url === "/login") {
        res.end("hello from Login")

    } else if(req.url === "/data") {
        res.end("hello from Fetch Data")

    } else {
        res.end("Page not found")
    }
})
app.listen(8000)
