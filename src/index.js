// import readline from "node:readline";
import readline from "node:readline/promises";

const rl = readline.createInterface({
  terminal: true,
  input: process.stdin,
  output: process.stdout,
});

// console.log("what is your name?");

// let input = "";

// rl.input.on("keypress", (event, rl) => {
//   if (rl.name === "return") {
//     console.log("you name is:", input);
//   } else {
//     input += event;
//   }
// });

const answer = await rl.question("what is your name? ");
console.log("you name is:", answer);

const answer2 = await rl.question("where do you live? ");
console.log("you live in:", answer2);

rl.close();
