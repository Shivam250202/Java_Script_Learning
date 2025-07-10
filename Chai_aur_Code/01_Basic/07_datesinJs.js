// Date 


// let myDate = new Date ();
// console.log(myDate); // Current date and time
// console.log(myDate.toString()); // Current date and time in string format
// console.log(myDate.toDateString()); // Current date in string format
// console.log(myDate.toLocaleString()); // Current time in string format

// console.log(typeof myDate); // object


let myDate2 = new Date(2025,0,25); // Year, Month (0-11), Day
// console.log(myDate2); // 2025-01-25T00:00:      
// console.log(myDate2.toString()); // Fri Jan 25 2025 00:00:00 GMT+0530 (India Standard Time)
// console.log(myDate2.toDateString()); // Fri Jan 25 2025

let myTimeStamp = Date.now(); // Returns the number of milliseconds since January 1, 1970
console.log(myTimeStamp);
console.log(myDate2.getTime());

console.log(Math.floor(myTimeStamp / 1000)); // Returns the number of seconds since January 1, 1970

let newDate = new Date();
console.log(newDate);
console.log(newDate.getFullYear()); // Returns the year
console.log(newDate.getMonth()); // Returns the month (0-11)    
console.log(newDate.getDate()); // Returns the day of the month (1-31)
console.log(newDate.getDay()); // Returns the day of the week (0-6)


// What is a date in JavaScript?
// A date in JavaScript is an object that represents a specific point in time, including the year, month, day, hour, minute, second, and millisecond.
// The Date object provides methods to work with dates and times, allowing you to create, manipulate, and format dates in various ways.
// The Date object is used to handle dates and times in JavaScript, providing methods for creating, manipulating, and formatting dates.