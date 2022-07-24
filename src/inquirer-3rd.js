import inquirer from "inquirer";
import chalk from "chalk";
import fs from "fs/promises";

async function askQuestion() {
  const questions = await fs.readFile("./src/data/questions.json");

  const parsedQuestions = JSON.parse(questions.toString());

  const resolvedQuestions = parsedQuestions.map((question) => ({
    name: question.question,
    type: question.options ? "list" : "input",
    choices: question.options,
    message: question.question,
  }));

  const answers = await inquirer.prompt(resolvedQuestions);

  console.log(answers);

  parsedQuestions.forEach((question) => {
    if (question.answer === answers[question.question]) {
      console.log(chalk.green(`答案正确`));
    } else {
      console.log(chalk.red(`答案错误`));
    }
  });
}

export { askQuestion };
