import inquirer from "inquirer";

async function askQuestion() {
  const answers = await inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is your name?",
    },
    {
      type: "input",
      name: "live",
      message: "What do you live?",
    },
  ]);

  console.log("you name is:", answers.name);
  console.log("you live in:", answers.live);
}

export { askQuestion };
