// 4.Exploring Objects with for...in Loop
// Objective: Practice working with objects in TypeScript and iterating over their properties using
// a for...in loop.
// Instructions:
// 1. Create a simple object with three items:
// o Define an object called myObject with three properties: item1, item2, and item3,
// each with corresponding string values.
// 2. Use a for...in loop to get properties' names and values from the object:
// o Iterate through the properties of myObject using a for...in loop.
// o Inside the loop, print each property's name and its corresponding value to the
// console.
import gradient from "gradient-string";
import chalk from "chalk";
console.log(chalk.blueBright.bgWhiteBright.bold("\t\t\t\t\t\t Exploring Objects\n\n"));
console.log(chalk.cyanBright("----------------------------------------------------------------------------------------------------------------\n"));
let myObject = {
    item1: "apple",
    item2: "pineapple",
    item3: "cherry",
};
for (const key in myObject) {
    console.log(gradient.retro(`\t\t\t property name is ${key} = its corresponding value is ${myObject[key]}`));
}
console.log(chalk.cyanBright("----------------------------------------------------------------------------------------------------------------\n"));
