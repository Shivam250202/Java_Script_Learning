(function chai(){
    // immediately invoked function expression (IIFE)
    console.log("Hello, this is an IIFE!");
})();
// // ; use to separate statements of IIFE from other code
((name) => {
    console.log( `Hello, ${name}! This is an IIFE with an arrow function.` );
})(`Shivam`)

// let val1 = 10;
// let val2 = 20;  

// function addNum(num1, num2){
//     let total = num1 + num2;
//     return total;
// }

// let result1 = addNum(val1, val2);
// let result2 = addNum(30, 40);

// console.log(result1, result2); // Output: 30 70




// what is an IIFE?
// An IIFE (Immediately Invoked Function Expression) is a JavaScript function that is executed immediately after it is defined.
// It is a common design pattern used to create a private scope for variables and functions, preventing them from polluting the global scope.
// IIFEs are often used to encapsulate code, avoid naming conflicts, and create modules in JavaScript.