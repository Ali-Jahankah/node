const myName = "Ali";
const sayHello = (arg) => {
    return `Hello ${arg}`
}

// exports.greeting = sayHello;
// exports.fullName = myName;

module.exports = {
    greeting: sayHello,
    fullName: myName,
}