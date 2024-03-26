#! /usr/bin/env node

import inquirer from "inquirer";

console.log("\n\tWellcome to Shuaib - CLI Number Guessing Game\n");

const randomNumber = Math.floor(Math.random()* 5 + 1);

const answers = await inquirer.prompt([

    {
        name: "userGuessNumber",
        type: "number",
        message: "Enter your guess numbr(Number Limit from 1 to  5)",
    },
]);

if (answers.userGuessNumber === randomNumber){
    console.log("Congratulation ! you guess a correct number.");
}
else{
    console.log("Sorry, you  guess a worng number");
}