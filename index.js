const http = require("http");
const tester = require('./tester.js');
const {
    greeting,
    fullName
} = tester;
const server = http.createServer((req, res) => {
    console.log(req);
})
console.log(greeting("reza"));
console.log(fullName);

server.listen(3000);