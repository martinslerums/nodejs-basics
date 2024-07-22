import http from "http";
import fs from "fs";

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    // res.writeHead(200, "OK", {"Content-Type": "txt/html"})
    res.statusCode = 200;
    (res.statusMessage = "OK"), res.setHeader("Content-Type", "text/html");

    fs.readFile("10. Serving Pages/public/home.html", (error, data) => {
      if (error) throw error;
      res.end(data);
    });
  } else if (req.url === "/about") {
    res.statusCode = 200;
    (res.statusMessage = "OK"), res.setHeader("Content-Type", "text/html");

    fs.readFile("10. Serving Pages/public/about.html", (error, data) => {
      if (error) throw error;
      res.end(data);
    });
  } else {
    res.statusCode = 404;
    (res.statusMessage = "BAD"), res.setHeader("Content-Type", "text/html");
    res.end("<h3> PAGE NOT FOUND </h3>");
  }
});

//Server now listens port 8000
server.listen(8000, () => console.log("Server is up and running"));
