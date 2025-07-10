let Score = "100";  // string data type

let Score1 = "264abac";  // number data type

// console.log(typeof Score );  // string concatenation, output: "1001"
// console.log(typeof(Score));
// console.log(typeof Score1);  // number, output: 264abac
// console.log(typeof(Score1));  // number, output: 264abac




// Convert string to number
let ScoreNumber = Number(Score);  // convert string to number 

let ScoreNumber1 = Number(Score1);  // convert string to number, output: NaN (Not a Number)

// console.log(ScoreNumber);  // 100
// console.log(ScoreNumber1);  // NaN


// console.log(typeof ScoreNumber);  // number
// console.log(typeof(ScoreNumber1));  // number


let Score2 = true;  // boolean data type
let Score2Number = Number(Score2);  // convert boolean to number, output: 1 (true is converted to 1)
// console.log(Score2Number)
// console.log(typeof Score2Number);  // string



let SomeNumber = 33;
let stringNumber = String(SomeNumber);  // convert number to string
console.log(stringNumber);  // "33"
console.log(typeof stringNumber);  // string    


// *********************** Operations ***********************

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " Shivam"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log( (3 + 4) * 5 % 3);

// console.log(+true);
// console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
console.log(gameCounter);

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion

// what is type conversion?
// Type conversion is the process of converting a value from one data type to another.
// In JavaScript, type conversion can be done explicitly using functions like Number(), String(), Boolean(), etc., or implicitly by the JavaScript engine when performing operations on values of different types.