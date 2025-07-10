const user = {
    username : "Shivam",
    price : 20000,

    welcomeMessage : function() {
        // console.log(`Welcome ${this.username}, your price is ${this.price}`);
        // console.log(this)
    }
}

// user.welcomeMessage(); // Output: Welcome Shivam, your price is 20000
// user.username = "Shiva";
// user.welcomeMessage(); // Output: Welcome Shiva, your price is 20000

// console.log(this)

// Arrow functions do not have their own 'this' context, they inherit 'this' from the parent scope

// function Chai () {
//     let username = "Shivam"
//     console.log(this); // Output: Window object in browser or global object in Node.js
// }

// Chai()

// const chai = function () {
//     let username = "Shivam"
//     console.log(this.username); // Output: Window object in browser or global object in Node.js  
// }
// chai()


// const chai = () => {
//     let username = "Shivam"
//     console.log(this);
// }

// chai(); // Output: undefined, because arrow functions do not have their own 'this' context

// const addNum = (num1, num2) => {
//     return num1 + num2;
// }

// const addNum = (num1, num2) =>  num1 + num2;

const addNum = (num1, num2) =>  ({username: "Shivam", sum: num1 + num2});

console.log(addNum(4, 10)); // Output: 14



// what is an arrow function?
// An arrow function is a concise way to write function expressions in JavaScript.
// It uses the arrow syntax (=>) and does not have its own 'this' context, meaning it inherits 'this' from the parent scope.
// Arrow functions are often used for shorter function definitions and can make code more readable, especially when used as callbacks or in functional programming patterns.