import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bold(`\n \t Wellcome to Word Counter Made By Asjad Nawaz`));
console.log("=".repeat(60));
let User_input = await inquirer.prompt({
    message: "Please Enter a Sentence to Count Words: ",
    type: "input",
    name: "UserInput"
});
let words = User_input.UserInput.trim().split(" ");
console.log(`\n`);
console.log(words);
console.log(`\n`);
console.log(`Number Of Words in the Sentence: ${chalk.yellow(words.length)}`);
