const http = require("http");
const fs = require("fs");

const port = 8001;

const app = http.createServer((req, res) => {
    console.log(req.url);
    page = ""
    switch(req.url){
        case "/" :
            page = "./index.html"
            break;
        case "/about" :
            page = "./about.html"
            break;
        case "/contact" :
            page = "./contact.html"
            break;
        default :
            page = "./notfound.html"
    }
    fs.readFile(page, (err, data) => {
        if (err) {
            console.error(err);
            return;
        }
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
    });
});

app.listen(port, (err) => {
    if (err) {
        console.error("Error starting the server:", err);
        return;
    }
    console.log("Server is running on port", port);
});