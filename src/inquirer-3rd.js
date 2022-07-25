import inquirer from "inquirer";
import chalk from "chalk";
import fs from "fs/promises";

async function main() {
  const flags = [];
  process.argv.forEach((arg) => {
    if (/^-/.test(arg)) {
      flags.push(arg.replace(/^-{1,2}/, ""));
    }
  });

  if (flags.includes("a") || flags.includes("add")) {
    addQuestion();
  } else {
    askQuestion();
  }
}

function checkAnswer(input, answer) {
  if (input === answer) {
    console.log(chalk.green(`答案正确`));
    return true;
  }
  console.log(chalk.red(`答案错误`));
  return false;
}

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
    question.lastAnswerIsCorrect = checkAnswer(
      answers[question.question],
      question.answer
    );
    question.lastAskedDateTime = Date().toString();
  });

  await fs.writeFile(
    "./src/data/questions.json",
    JSON.stringify(parsedQuestions)
  );
}

function getId(data) {
  return Math.max(...data.map((item) => item.id)) + 1;
}

async function addQuestion() {
  console.log(chalk.green(`添加问题`));
  const answers = await inquirer.prompt([
    {
      name: "question",
      type: "input",
      message: "输入问题",
    },
    {
      name: "answer",
      type: "input",
      message: "输入答案",
    },
  ]);

  const questions = await fs.readFile("./src/data/questions.json");
  const parsedQuestions = JSON.parse(questions.toString());

  parsedQuestions.push({
    id: getId(parsedQuestions),
    question: answers.question,
    answer: answers.answer,
  });

  await fs.writeFile(
    "./src/data/questions.json",
    JSON.stringify(parsedQuestions)
  );
}

export { main };
