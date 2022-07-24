import readline from "node:readline/promises";

async function askQuestion() {
  const rl = readline.createInterface({
    terminal: true,
    input: process.stdin,
    output: process.stdout,
  });

  const answer = await rl.question("what is your name? ");
  console.log("you name is:", answer);

  const answer2 = await rl.question("where do you live? ");
  console.log("you live in:", answer2);

  rl.close();
}

export { askQuestion };
