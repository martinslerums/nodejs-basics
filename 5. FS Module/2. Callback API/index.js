import * as fs from "fs";

//We import fs not fs/promises meaning we are working with callback.
//We can do everything that was done in Promise API, but in this case try-catch block is redundant.
//We specify callback function that handles error, or any other logic, ( it can be named function also ).

fs.mkdir("E:/Code/NodeJS/5. FS Module/2. Callback API/nodejs", (error) => {
  if (error) {
    throw error;
  }

  console.log("Directory created");
});
