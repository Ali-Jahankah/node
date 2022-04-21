const fs = require("fs");
fs.writeFile("test.txt", "Hello this is a test", (er) => {
  if (er) throw er;
  console.log("Data seved!");
});
console.log("first console");
console.log("second console");
fs.writeFileSync("sync-file-test", "This is a sync file in Node.js");
fs.appendFile(
  "./test.txt",
  "\n This text has append with fs.appendFile",
  (err) => {
    if (err) throw err;
    console.log("Text has appended");
  }
);
fs.appendFileSync("./test.txt", "This is a sync text with fs.appendFileSync");
fs.unlink("./test.txt", (err) => {
  if (err) throw err;
});
fs.rename("./sync-file-test", "renameToTest2", (err) => {
  if (err) throw err;
});
fs.unlink("./renameToTest2.text", (err) => {
  if (err) throw err;
});
//=================Creating a server====================

// const chalk = require("chalk");
// const http = require("http");
// const server = http.createServer((req, res) => {
//   console.log(req);
// });
// server.listen(3000);
// const { greeting, fullName } = require("./tester.js");
//==============================================================================================
const tester = require("./tester");
// console.log(chalk.green(greeting("reza")));
// console.log(chalk.white(fullName));
// console.log(chalk.green("========"));
// console.log(chalk.green("========"));
// console.log(chalk.white("========"));
// console.log(chalk.white("========"));
// console.log(chalk.red("========"));
// console.log(chalk.red("========"));
// console.log(chalk.red("Iran"));
// // ===========================================
// console.log(process.pid);
// console.log(process.arch);
// process.argv.forEach((val, index) => {
//   return console.log(`${index}: ${val}`);
// });
// console.log(process.config);
// console.log(process.ppid);
// console.log(process.title);
// process.on("beforeExit", (code) => console.log(code));
// console.log(process.env);

tester.test1();
tester.test2();
console.log(process.argv);
