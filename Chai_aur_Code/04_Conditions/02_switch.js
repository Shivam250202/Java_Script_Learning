// 

// const month = "January";

// switch (month) {
//     case "January":
//         console.log("It's January");
//         break;
    
//     case "February":
//         console.log("It's February");
// }

const month =6;
switch (month) {
    case 1:
        console.log("It's January");
        break;
    case 2:
        console.log("It's February");
        break;
    case 3:
        console.log("It's March");
        break;
    case 4:
        console.log("It's April");
        break;
    default:
        console.log("Invalid month");
}

// What is Switch Statement?
// A switch statement is a control structure that allows you to execute different blocks of code based on the value of a variable or expression. It is often used as an alternative to multiple if-else statements when you have many conditions to check against a single variable.
// The switch statement evaluates an expression and compares its value to a series of case labels. When a match is found, the corresponding block of code is executed. If no match is found, the default block (if provided) is executed.