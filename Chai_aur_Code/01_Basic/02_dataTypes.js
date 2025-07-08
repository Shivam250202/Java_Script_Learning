 "use strict";   // treat all JS code as newer version

 // alert("Hello Shivam"); we using node.js not browser so alert will not work

 console.log(3 
    +
     3)   //code readability is important in JS, so we can write code in multiple lines

console.log("Hello Shivam");  // print in console

let name = "Shivam";  // string data type
let age = 22;  // number data type
let isLoggedIn = true;  // boolean data type
let state;  // undefined data type
let nullVariable = null;  // null data type
let bigIntVariable = BigInt(1234567890123456789012345678901234567890);  // BigInt data type
let symbolVariable = Symbol("unique");  // Symbol data type


console.log(typeof nullVariable);  // string
console.log(typeof bigIntVariable);  // bigint
console.log(typeof symbolVariable);  // symbol
console.log(typeof name);  // string
console.log(typeof age);  // number
console.log(typeof isLoggedIn);  // boolean
console.log(typeof state);  // undefined


 


// number = 2 to power of 53
// string = "Hello"
// boolean = true or false
// undefined = variable is declared but not assigned any value
// null = Standalone value that represents no value or empty value // object type in JS
// BigInt = large integers
// Symbol = unique identifier


// objects = collection of key-value pairs