import chalk from "chalk"

const wilders = ["Jules", "Maxence", "Salah", "Jordan"]

wilders.map((wilder, index) => {
  index === 0 && console.log(chalk.blue(wilder))
  index === 1 && console.log(chalk.red(wilder))
  index === 2 && console.log(chalk.yellow(wilder))
  index === 3 && console.log(chalk.green(wilder))
})
