import EventEmitter from "events";

//Creating Instance of an event
const customerEmitter = new EventEmitter();

// 1. on: listen/register for an event
// 2. once: listen/register for an event | This fires only ONCE
// 3. emit: emit/call an event

customerEmitter.on("response", (name, age) => {
  console.log(`user: ${name} age: ${age}`);
});

//if we change .on to .once only one emit will be called
customerEmitter.once("response", (name, age) => {
  console.log(`user: ${name} age: ${age}`);
});

customerEmitter.emit("response", "John", 17);
customerEmitter.emit("response", "Martin", 29);
customerEmitter.emit("response", "Alex", 15);


