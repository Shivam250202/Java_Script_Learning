// for Loop

// for (let num = 0; num <= 10; num++) {
//     const element = num;
//     console.log(element)
    
// }

// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     if (element ==5) {
//         console.log("element found: 5");
//     }
//     console.log(element);
    
// }


for (let i = 1; i <= 10; i++) {
    console.log(`Outer Loop: ${i}`);
    for (let j = 1; j <= 10; j++) {
        // console.log(`Inner Loop: ${j} and Outer Loop: ${i}`);
        console.log(`${i} * ${j} = ${i * j}`);
    }
}

