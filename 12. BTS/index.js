//Understanding Threads

// Blocking code
// If we run this code for example in web browsers console, Start will be logged but alert will block the code execution, and only after we take of alert
// the End will be logged

  /* 
  console.log("Start");
  alert("Block");
  console.log("End");
  */

// Non Blocking code
// Since we are using callback function code is run from top to bottom without blockage.After one secod timeout is executed.

  /* 
  console.log("Start");
  setTimeout(() => {
    alert("Non-blocking code");
  }, 1000);
  console.log("End");
  */

// Real-life example.
// At first it will log Start
// Then it will readFile and execute everything that is within file ( even if it was 1000 lines) which means it is blocking this codes execute
// And once it is done iwith readFile it will log out End
import fs from "fs";

console.log("Start");

let data = fs.readFileSync("E:/Code/NodeJS/12. BTS/test.txt");
console.log(data.toString());

console.log("End");

// Since here we use a callback function it will log Start, then End and only then it will proceed with our readFile.
console.log("Start");

fs.readFile("E:/Code/NodeJS/12. BTS/test.txt", (error, response) => {
  error ? console.log(error) : console.log(response.toString())
});

console.log("End");

