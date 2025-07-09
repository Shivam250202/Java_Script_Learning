// console.log("S");
// console.log("H");
// console.log("I");
// console.log("V");
// console.log("A");
// console.log("M");

function CallMyName() {
  console.log("S");
  console.log("H");
  console.log("I");
  console.log("V");
  console.log("A");
  console.log("M");
}


// CallMyName();

// function addTwoNumber( Number1, Number2) {
//     console.log(Number1 + Number2);
// }


function addTwoNumber( Number1, Number2) {
    // let result = Number1 + Number2;
    // return result;
    return Number1 + Number2; // This will return the sum of Number1 and Number2
}


const result = addTwoNumber (3, 5);

// console.log("result", result); // Output: undefined, because the function does not return a value


function loginUserMessage (username){
  if (username === undefined) 
    // console.log( "Username is required");
    {
    
  }
    // return `${username} just logged in`;
}

// console.log(loginUserMessage()); // Output: Shivam just logged in


// Rest Operator returns an array of all the arguments passed to the function
// It is used to handle an indefinite number of arguments in a function
function calculateCartPrice ( ...num1)
{   
  return num1
}

// console.log(calculateCartPrice(100, 200, 400, 500, 300)); // Output: 100


const user = {
  username: "Shivam",
  price: 20000
}

function handelObject (anyObject){
  console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
  
}

handelObject(user); // Output: Username is Shivam and price is 20000 

handelObject({
  username: "Shiva",
  price: 20000
})

const myNewArray = [100, 200, 300, 400, 500];
function returnSecondValue (getArray){
  return getArray[1]; // Returns the second value of the array
}
console.log(returnSecondValue(myNewArray)); // Output: 200
console.log(returnSecondValue([100, 200, 300, 400, 500])); // Output: 200