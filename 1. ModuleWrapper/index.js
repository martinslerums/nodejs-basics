//Module Wrapper

//Everytime our code is run this function wrapps it.

(function (exports, require, module, __filename, __dirname) {
  console.log("Hello from IIFE");
})();

console.log(__filename); // e:\Code\NodeJS\index.js
console.log(__dirname); // e:\Code\NodeJS