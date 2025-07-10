//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3

// What is a primitive and non-primitive data type in JavaScript?
// A primitive data type in JavaScript is a basic data type that represents a single value, such as a string, number, boolean, null, undefined, symbol, or bigint. These types are immutable and do not have properties or methods.
// A non-primitive data type, on the other hand, is a complex data type that
// can hold multiple values or properties, such as objects, arrays, and functions. Non-primitive types are mutable and can be modified after creation.