// let a = 10;
// const b = 20;
let d = 3000;

if (true) {
    // let a = 10;
    // const b = 20;
    var c = 30; 
    // console.log("Inner c:", c)
}

// console.log(d);



function one(){
    const user = "Shivam";

    function two() {
        const Website = "youtube"
        console.log(user);
        console.log(Website);
    }
    // console.log(Website);

    // two()
}

// one()


if (true) {
    username = "Shivam";

    if (username === "Shivam") {
        const Website = " youtube";
        // console.log(username + Website);
    }
    // console.log(Website)
}

// console.log("username"); // Output: Shivam




// ______________________Interisting Topic______________________


function addone (num){
    return num + 1;
}

console.log(addone(5)); // Output: 6

const addTwo = function (num){
    return num + 2;
}

console.log(addTwo(5)); // Output: 7
return addTwo

// what is a Scope in JavaScript?
// A scope in JavaScript refers to the context in which variables and functions are accessible. It determines the visibility and lifetime of variables, functions, and objects in your code.
// There are two main types of scope in JavaScript: global scope and local scope. Global scope refers to variables and functions that are accessible throughout the entire code, while local scope refers to variables and functions that are only accessible within a specific block or function.
// JavaScript uses lexical scoping, meaning that the scope of a variable is determined by its position in the source code. Variables declared with var, let, or const have different scoping rules, with var being function-scoped and let/const being block-scoped.