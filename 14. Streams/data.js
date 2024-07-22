import fs, { createReadStream } from "fs";

for (let i = 0; i < 10000; i++) {
  fs.writeFileSync("./data.txt", `${i}\n`, { flag: "a" });
}

// The highWaterMark option sets the maximum number of bytes to store in the internal buffer before ceasing to read from the underlying resource.
// const stream = createReadStream("./data.txt", {highWaterMark: 90000});

const stream = createReadStream("./data.txt", { encoding: "utf-8" });

stream.on("data", (data) => {
  console.log(data);
});
