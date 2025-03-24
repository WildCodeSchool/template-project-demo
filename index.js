import chalk from "chalk"
import { characters } from "./data.js"

console.log("hello mate")

for (const character of characters) {
  console.log(character)
}

console.log(chalk.blue("This is blue text"))
console.log(chalk.green("This is green text"))
