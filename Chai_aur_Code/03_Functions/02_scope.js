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