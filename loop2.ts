// 2. Guessing Game (Using while loop )
// Objective: Create a simple number guessing game where the user tries to guess a randomly
// generated number between 1 and a specified maximum value using a predefined set of guesses.
// Steps to Follow:
// 1. Set a maximum value: Create a variable to store the maximum value for the number
// guessing game.
// 2. Generate a random number: Use Math.random() and Math.floor() to generate a
// random number between 1 and the maximum value. Log this value to the console for
// development purposes.
// 3. Track the guess status: Create a variable to track whether the user's guess is correct. Set
// it to false initially.
// 4. Simulate user guesses: Use an array to store a series of predefined guesses.
// 5. Iterate over guesses: Use a while loop to iterate over the predefined guesses until the
// correct guess is made.
// 6. Check the user's guess: Inside the loop, check if the current guess matches the random
// number. Provide feedback if the guess is too high or too low.

import inquirer from "inquirer";
import gradient from "gradient-string"
import chalk from "chalk"
console.log(chalk.hex("FFA533").bgYellowBright.bold("\t\t\t\t\t\t Exploring Arrays\n\n"));
console.log(gradient.passion("----------------------------------------------------------------------------------------------------------------\n"));

let maxVal: number = 10;
let randomNumber = Math.floor(Math.random() * maxVal) + 1;
console.log(randomNumber); // development purposes
let guessStatus: boolean = false;
let userGuesses: number[] = [5, 7, 3, 9, 1, 6];
let i = 0;
while (i < userGuesses.length && !guessStatus) {
  let currentGuess = userGuesses[i];
  if (currentGuess === randomNumber) {
    console.log(chalk.hex("FFA533").italic(`Congratulation!! 🎉 You guessed right number ${randomNumber}`));
    guessStatus = true;
  } else if (currentGuess < randomNumber) {
    console.log(chalk.hex("93FF33")(`you guess  ${currentGuess} which is too low , Try again!!😒`));
  } else {
    console.log(chalk.hex("33FFE6")(`you guess   ${currentGuess}  which is too high , Try again!!.😐`));
  }
  i++;
}
console.log(gradient.passion("----------------------------------------------------------------------------------------------------------------\n"));

if (!guessStatus) {
  console.log(chalk.yellowBright(`Sorry 🥲, you didn't guess the number ${randomNumber} correctly. Better luck
  next time!`));
}
console.log(gradient.passion("----------------------------------------------------------------------------------------------------------------\n"));

// -----------------------------------------------------------------------------------------------------------------------------------------------

//  this is not a part of above question but its another way to do this question using inquirer to make it dyanamic 
// and in this user have 5 attemp to guesse the right number



// let maxVal2: number = 10;
// let randomNumber2 = Math.floor(Math.random() * maxVal2) + 1;
// // console.log(randomNumber2); // development purposes
// let guessStatus2: boolean = false;
// let attemp = 1;
// do {
//   let userGuesses2: number[] = [];
//   let question = await inquirer.prompt([
//     {
//       name: "num",
//       type: "number",
//       message: `Enter any number between 1 to 10 . you have 5 attemps . the current ${attemp}`,
//     },
//   ]);
//   userGuesses2.push(question.num);
//   let j = 0;
//   while (j < userGuesses2.length && !guessStatus2) {
//     let currentGuess2 = userGuesses2[j];
//     if (currentGuess2 === randomNumber2) {
//       console.log(
//         `Congratulation!! You guessed right number ${randomNumber2} in ${attemp}`
//       );
//       guessStatus2 = true;
//     } else if (currentGuess2 < randomNumber2) {
//       console.log(
//         `you guesse  ${currentGuess2} which is too low , Try again!!`
//       );
//     } else {
//       console.log(
//         `you guess   ${currentGuess2}  which is too low , Try again!!`
//       );
//     }
//     j++;
//   }

//   attemp++;
// } while (attemp <= 5);
// if (!guessStatus2) {
//   console.log(`Sorry, you didn't guess the number ${randomNumber2} correctly. Better luck
//         next time!`);
// }
