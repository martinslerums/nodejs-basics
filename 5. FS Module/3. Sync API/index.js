import * as fs from "fs";

//Creating Directory
//Sync allows us not to use any callback function or try-catch blocks, we can perform all the previous actions
//After each action we need to add Sync => mkdirSync, rmdirSync etc.

//Create
fs.mkdirSync("E:/Code/NodeJS/5. FS Module/3. Sync API/nodejs");

//Remove
fs.rmdirSync("E:/Code/NodeJS/5. FS Module/3. Sync API/nodejs");
