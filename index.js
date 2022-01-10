const chalk = require('chalk');
const {
    greeting,
    fullName
} = require('./tester.js');




console.log(chalk.green(greeting("reza")));
console.log(chalk.white(fullName));
console.log(chalk.green("========"));
console.log(chalk.green("========"));
console.log(chalk.white("========"));
console.log(chalk.white("========"));
console.log(chalk.red("========"));
console.log(chalk.red("========"));
console.log(chalk.red("Iran"));
// ===========================================
console.log(process.pid);
console.log(process.arch);
process.argv.forEach((val, index) => {
    return console.log(`${index}: ${val}`);
})
console.log(process.config);
console.log(process.ppid);
console.log(process.title);
process.on('beforeExit', (code) => console.log(code));
console.log(process.env);