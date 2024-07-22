//Modules => A way to pass code form one file to another.

//This allows us to use that function from greet.js file.
const greet = require("./greet");

greet("Martin");

//This is how we accept variables from people.js file.
const personObject = require("./peoples");
console.log(personObject); // Logs out { person1: 'Alex', person2: 'Joe', person3: 'John' }

//We can also destructure the exported object from people.js

const { person1, person2, person3 } = require("./peoples");
greet(person1);
greet(person2);
greet(person3);

