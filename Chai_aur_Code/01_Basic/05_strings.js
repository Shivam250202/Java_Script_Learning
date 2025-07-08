const name = "Shivam";
const repoCount = 20;


// console.log(name + repoCount +" value");

// console.log(`My name is ${name} and my repo count is ${repoCount}`);


// const gameName = new String("Call of Duty");
// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length); // 13
// console.log(gameName.toUpperCase()); // CALL OF DUTY
// console.log(gameName.toLowerCase()); // call of duty 
// console.log(gameName.charAt(0)); // C
// console.log(gameName.indexOf("u")); // 2



const gameName = new String("Call-of-Duty");

// const newString = gameName.substring(0, 5);
// console.log(newString); // Call

// const anotherString = gameName.slice(-2, 5);
// console.log(anotherString); // Call



const newStringOne = "  Shivam   ";
console.log(newStringOne)
console.log(newStringOne.trim()); // Shivam

const url = "https://www.shivam%20pandey.com";
console.log(url.replace("%20", "-")); // https://www.shivam-pandey.com

console.log (url.includes("sunder")); // true

console.log(gameName.split("-")); // [ 'Call', 'of', 'Duty' ]
