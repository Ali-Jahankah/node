const myName = "Ali";
const sayHello = (arg) => {
  return `Hello ${arg}`;
};

// exports.greeting = sayHello;
// exports.fullName = myName;
const test1 = () => {
  console.log("test 1 ==> exports.name=target");
};
const test2 = () => {
  console.log("test 2 ==> module.exports={target}");
};
exports.greeting = sayHello;
exports.fullName = myName;
module.exports = {
  test1,
};
module.exports.test2 = test2;
