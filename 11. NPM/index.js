// Little showcase for nodemon so we would not need to manualy restart our server all the time, this package performs this automatically.
// First we < npm init > our package.json file and then npm i nodemon.
// Create a script for "dev" and npm run dev to start

import http from "http";

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.write("<h1> Does nodemon work ? </h1>");
});

server.listen(8000, () => console.log("Server is up and running"));
