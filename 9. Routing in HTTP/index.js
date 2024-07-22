import http from "http";


// Basic simple routing in NodeJS. ( Nowadays it is done by ExpressJS )
const server = http.createServer((req, res) => {
  if (req.url === '/'){
    res.writeHead(200, "OK", {"Content-Type" : "txt/html"})
    res.end("<a href='/about'> About </a>");
  } else if (req.url === '/about'){
    res.writeHead(200, "OK", {"Content-Type" : "txt/html"})
    res.end("<h2> About section </h2>")
  } else {
    res.writeHead(404, "BAD", {"Content-Type" : "txt/html"})
    res.end("<h1> Not found </h1>",)
  }

});

//Server now listens port 8000
server.listen(8000, () => console.log("Server is up and running"));
