// if

// if (condition){
//     // code to execute if condition is true
// }

// if (true){
//     console.log("This will always execute because the condition is true.");
// }

// if (false){
//     console.log("This will never execute because the condition is false.");
// }

// >, <, >=, <=, ==, !=, ===, !== these are comparison operators used in conditions.

// const isUserLoggedIn = true;

// if (2 != 3){
//     console.log("This will execute because 2 is not equal to 3.");
// }

// const temperature = 30;
// if (temperature === 25){
//     console.log("It's too hot outside.");
// }else{
//     console.log("It's a nice day outside.");
// }

// const score = 200;

// if (score >= 100) {
//   const power = "Fly";
//   console.log(`You have earned the power to ${power}.`);
// }
// console.log();


// const balance = 5000;
// if (balance >= 1000) console.log("You are Rich."), console.log("You can buy a car.");


// const balance = 6000;
// if (balance >= 7000) {
//   console.log("You are Rich.");
// }
// else if (balance >=10000) {
//   console.log("You are very Rich.");
// }
// else {
//   console.log("You are poor.");
//   console.log("You cannot buy a car.");
// }


const isUserLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if (isUserLoggedIn && debitCard) {
  console.log("You can buy a car.");
}

if (loggedInFromGoogle || loggedInFromEmail) {
  console.log("You can buy a car.");
}



// what is a condition in JavaScript?
// A condition in JavaScript is an expression that evaluates to true or false. It is used to control the flow of execution in a program, allowing developers to execute different blocks of code based on whether the condition is met or not.
// Conditions are typically used in control structures like if statements, switch statements, and loops to make
// decisions in the code execution process. They are essential for implementing logic and handling different scenarios in a program.

