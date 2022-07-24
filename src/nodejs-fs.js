// import fs from "fs";
import fs from "fs/promises";

// first way
// fs.readFileSync
// it is blocking, it will wait until the file is read
// const contents = fs.readFileSync("./src/data/questions.json");
// console.log(JSON.parse(contents.toString()));

// second way
// fs.readFile
// it is non-blocking, it will return a promise
// fs.readFile("./src/data/questions.json", (err, contents) => {
//   if (err) {
//     console.log(err);
//     process.exit(1);
//   } else {
//     console.log(JSON.parse(contents.toString()));
//   }
// });

// third way

try {
  const contents = await fs.readFile("./src/data/questions.json");
  console.log(JSON.parse(contents.toString()));
} catch (error) {
  console.log(err);
  process.exit(1);
}
