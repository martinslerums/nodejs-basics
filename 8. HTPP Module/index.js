import http from "http";

//Creating our Server
const server = http.createServer((req, res) => {
  // console.log(req)
  res.setHeader("Content-Type", "text/html");
  res.write("<h1> Hello from Node-Js server </h1>");
});

//Server now listens port 8000
server.listen(8000, () => console.log("Server is up and running"));
